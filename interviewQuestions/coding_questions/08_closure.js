function bigFunc() {
  let newArray = new Array(700).fill("♥"); // Array is created here
  return (element) => newArray[element]; // Inner function captures newArray
}

let getElement = bigFunc(); // bigFunc is called, array is created only once

// Using the closure
console.log(getElement(599)); // Accesses the 600th element of newArray
console.log(getElement(670)); // Accesses the 671st element of newArray

// Explanation:
// - Closure: A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.
// - Captured Variables: The inner function captures the variables from its outer function's scope. In this case, newArray is captured by the inner function.
