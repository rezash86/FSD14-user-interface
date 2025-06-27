let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let isGameOver = false;

const board = document.getElementById("board");
const status = document.getElementById("status");

function renderBoard() {
  board.innerHTML = "";
  gameBoard.forEach((value, index) => {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = value;
    cell.dataset.index = index;
    cell.addEventListener("click", handleClick);
    board.appendChild(cell);
  });
}

function handleClick(e) {
  const index = e.target.dataset.index;
  if (gameBoard[index] || isGameOver) return;

  gameBoard[index] = currentPlayer;
  if (checkWinner()) {
    status.textContent = `Player ${currentPlayer} wins!`;
    isGameOver = true;
  } else if (!gameBoard.includes("")) {
    status.textContent = "It's a draw!";
    isGameOver = true;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    status.textContent = `Player ${currentPlayer}'s turn`;
  }
  renderBoard();
}

function checkWinner() {
  const winCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];
  return winCombos.some(combo => 
    gameBoard[combo[0]] && 
    gameBoard[combo[0]] === gameBoard[combo[1]] && 
    gameBoard[combo[1]] === gameBoard[combo[2]]
  );
}

function resetGame() {
  currentPlayer = "X";
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  isGameOver = false;
  status.textContent = `Player ${currentPlayer}'s turn`;
  renderBoard();
}

renderBoard();
