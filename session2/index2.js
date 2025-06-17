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
