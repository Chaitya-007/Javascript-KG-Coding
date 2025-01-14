function multiplyBy(sum) {
  console.log(sum * 2);
}

function divideBy(sum) {
  console.log(sum / 2);
}

function calculate(a, b, operation) {
  var sum = a + b;
  operation(sum);
}

calculate(10, 6, multiplyBy);

calculate(10, 6, divideBy);
