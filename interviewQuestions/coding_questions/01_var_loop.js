const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using let
for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
  // Each iteration has its own scope, so the correct value of b[i] is logged.
  // Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 (after 1 second)
}

// Using var
for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
  // All iterations share the same i. By the time setTimeout runs, i is 10.
  // Output: undefined (10 times after 1 second) because b[10] is undefined.
}

// Fix for var using IIFE
for (var i = 0; i < 10; i++) {
  (function (i) {
    setTimeout(() => console.log(b[i]), 1000);
  })(i);
  // IIFE creates a new scope for each iteration, capturing the correct value of i.
  // Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 (after 1 second)
}
