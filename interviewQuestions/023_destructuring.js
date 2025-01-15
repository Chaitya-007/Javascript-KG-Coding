const arr = [1, 2, 3, 4, 5, 8, 9, 7];

// Array destructuring syntax
const [first, second] = arr;

console.log(first, second); // 1 2

const arr2 = [...arr];
console.log(arr2); // [1, 2, 3, 4, 5, 8, 9, 7]

// Object destructuring syntax
const obj = {
  name: "John",
  age: 25,
  country: "USA",
};
// Object destructuring syntax
const { name, age } = obj;
console.log(name, age); // John 25
