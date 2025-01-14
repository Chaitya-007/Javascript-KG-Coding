function add(...args) {
  var sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }

  return sum;
}

var result = add(10, 52, 34, 68, 75);
console.log(result);

function restWithArguments(a, b, ...args) {
  console.log(a);
  console.log(b);
  console.log(args);
}

restWithArguments(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
