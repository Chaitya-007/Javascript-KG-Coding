function calculate(num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4;
}

var array = [10, 20, 30, 40];
var result = calculate(...array);
console.log(result);

var array2 = [...array];
console.log(array2);

var array3 = [1, 2, ...array, 3, 4];
console.log(array3);

let obj = { x: 1, y: 2 };
let obj2 = { name: "Hans", age: 25 };

let mergeObj = { ...obj, ...obj2 };
console.log(mergeObj);
