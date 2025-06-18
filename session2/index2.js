let customers = [
  { name: "A", gender: "M", custId: "1231231" },
  { name: "B", gender: "F", custId: "4444" },
  { name: "C", gender: "F", custId: "243424" },
];

// I would like to keep the objects and only change one attribute of an object
console.log(customers);

// [
//   { name: 'A', gender: 'M', custId: '****' },
//   { name: 'B', gender: 'F', custId: '****' },
//   { name: 'C', gender: 'F', custId: '*****' }
// ]

let modifiedCustomers = customers.map((customer) => {
  //whatever I do will affect the elements
  return customer.name;
});

console.log(modifiedCustomers);

//spread operator
let modifiedCustomers2 = customers.map((customer) => ({
  ...customer,
  gender: customer.gender === "M" ? "-M-" : "-F-",
  custId: "*".repeat(customer.custId.length),
}));
console.log(modifiedCustomers2);

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sumWithInitial);

let myNumbers = [4, 5, 6];
// const findMin = (a, b) => Math.min(a, b);

console.log(myNumbers.reduce((a, b) => Math.min(a, b), 10));

const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
  );
  return returns;
}

array.reduce(reducer);
