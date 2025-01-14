// Create a new Set with initial values 4, 5, 6, 7
const newSet = new Set([4, 5, 6, 7]);
console.log(newSet); // Outputs Set {4, 5, 6, 7}

// Attempt to create a new WeakSet with non-object values (throws an error)
const newSet2 = new WeakSet([3, 4, 5]); // Throws an error

// Create an object
let obj1 = { message: "Hello world" };

// Create a new WeakSet with the object
const newSet3 = new WeakSet([obj1]);

// Check if the WeakSet contains the object
console.log(newSet3.has(obj1)); // true
