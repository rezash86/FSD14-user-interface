//1 - MAP - Double every number

const nums = [1, 2, 3, 4, 5];
const doubled = nums.map((n) => n * 2);

//2- MAP - Convert String to uppercase
const words = ["hello", "world"];
const uppercased = words.map((st) => st.toUpperCase());

// 3. FILTER – Keep only numbers greater than 15.
const mix = [5, 10, 15, 20, 25];
const greaterThan15 = mix.filter((num) => num > 15);

// 4. FILTER – Keep only adults (age >= 18).
const people = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
];
const adults = people.filter((p) => p.age > 18);

// 5. REDUCE – Sum all values in the array.
const values = [1, 2, 3, 4, 5];
const sum = values.reduce((total, n) => total + n);

// 6. REDUCE – Product of all values.
const factors = [1, 2, 3, 4];
const product = factors.reduce((total, n) => total * n, 1);

// 7. REDUCE – Count occurrences of each fruit.
const basket = ["apple", "banana", "apple", "orange", "banana"];
// we need somethign(data structure) to keep how many of each thing(element)
const counts = basket.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

// 8. FOREACH – Print each element of an array.
const primes = [2, 3, 5, 7];
primes.forEach((p) => console.log(p));

// 9. FOREACH – Create a new array like "Value: X" for each element.
const tens = [10, 20, 30];
const labeled = [];
tens.forEach((t) => labeled.push(`value : ${t}`));

// 10. FIND – Find object with id === 2.
const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
const item2 = items.find((item) => item.id === 2);

// 11. SOME – Is any number greater than 3? RD
const seq = [1, 2, 3, 4, 5];
const anyGreater3 = seq.some((n) => n > 3);

// 12. EVERY – Is every number divisible by 5? RD
const multiples = [10, 20, 30];
const allDivBy5 = multiples.every((n) => n % 5 === 0);

// 13. SORT – Ascending numeric sort.
const digits = [3, 1, 4, 1, 5];
const ascending = digits.sort((a, b) => a - b);

// 14. SORT – Alphabetical string sort.
const animals = ["dog", "cat", "elephant"];
const alpha = animals.sort();

// 15. SORT – Sort by numeric property.
const team = [
  { name: "Eva", age: 28 },
  { name: "Dan", age: 24 },
];
const ageSorted = team.sort((a, b) => a.age - b.age);

// 16. FLAT – Flatten one level deep.
const nested = [1, [2, [3, 4]]];
const flattened = nested.flat(Infinity);

// 17. CHAIN – Trim whitespace then UPPERCASE.
const messy = ["  a", "B ", "c ", "D"];
const cleanUpper = messy.map((e) => e.trim().toUpperCase);

// 18. CHAIN – Double numbers then filter > 10.
const series = [1, 2, 3, 4, 5, 6];
const doubledFiltered = series.map((s) => s * 2).filter((n) => n > 10);

// 19. ADVANCED REDUCE – Group items by category.
const grocery = [
  { name: "Apple", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Banana", category: "Fruit" },
];
let groupedByCategory = grocery.reduce((acc, item) => {
  acc[item.category] = (acc[item.category] || []).concat(item);
  return acc;
}, {});

// 20. FLATTEN & CLEAN – Flatten & remove falsy values. //RD
const crazy = [1, [2, null, [3]], undefined, [4]];
const flatClean = crazy.flat(Infinity).filter(Boolean);

console.log({
  doubled,
  uppercased,
  greaterThan15,
  adults,
  counts,
  labeled,
  item2,
  allDivBy5,
  ascending,
  ageSorted,
  flattened,
  flatClean,
});
