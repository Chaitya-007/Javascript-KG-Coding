let str1 = "hello";
let str2 = "llohe";

function check(s, t) {
  let first = s.split("").sort().join("");
  let second = s.split("").sort().join("");

  if (first === second) {
    return true;
  }
}

if (check(str1, str2)) {
  console.log("Anagram");
}
