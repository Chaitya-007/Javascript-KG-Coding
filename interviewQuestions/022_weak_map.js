// Create a new Map
const map1 = new Map();

// Set a key-value pair in the Map
map1.set("Value", 1);

// Create a new WeakMap
const map2 = new WeakMap();

// Attempt to set a key-value pair in the WeakMap with a non-object key (throws an error)
map2.set("Value", 2.3); // Throws an error because 'Value' is not an object

// Create an object
let obj = { name: "Vivek" };

// Create another WeakMap
const map3 = new WeakMap();

// Set a key-value pair in the WeakMap with an object key
map3.set(obj, { age: 23 });
