const findVowels = (str) => {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  console.log(Array.isArray(vowels)); // true

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};

// let str1 = "hello";
// let str2 = "llohe";

// function check(s, t) {
//   let first = s.split("").sort().join("");
//   let second = s.split("").sort().join("");

//   if (first === second) {
//     return true;
//   }
// }

// if (check(str1, str2)) {
//   console.log("Anagram");
// }
