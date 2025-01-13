var x = 3;
var y = "3";
console.log(x + y);

var x = 24;
var y = "Hello";
console.log(x + y);

var name = "Vivek";
var surname = " Bisht";
console.log(name + surname);

var x = 2;
var y = "3";
console.log(x - y);

var x = 220;
var y = "Hello";
var z = undefined;

console.log(x || y); // Returns 220 since the first value is truthy

console.log(x || z); // Returns 220 since the first value is truthy

console.log(x && y); // Returns "Hello" since both the values are truthy

console.log(y && z); // Returns undefined since the second value is falsy

if (x && y) {
  console.log("Code runs"); // This block runs because x && y returns "Hello" (Truthy)
}

if (x || z) {
  console.log("Code runs"); // This block runs because x || y returns 220(Truthy)
}
