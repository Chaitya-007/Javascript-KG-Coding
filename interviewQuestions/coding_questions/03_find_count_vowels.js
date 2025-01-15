let str = "Hello World";

const vowel = ["a", "e", "i", "o", "u"];

let count = 0;

for (let char of str.toLowerCase()) {
  if (vowel.includes(char)) {
    count++;
  }
}

console.log(count);
