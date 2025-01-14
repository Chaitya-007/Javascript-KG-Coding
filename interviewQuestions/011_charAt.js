var str = "123456";
var num = 0;

for (let i = 0; i < str.length; i++) {
  num = num * 10 + parseInt(str.charAt(i), 10);
}

console.log(num);
console.log(typeof num);
