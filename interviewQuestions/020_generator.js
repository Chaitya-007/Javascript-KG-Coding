function* genFunc() {
  yield 1;
  yield 2;
  return 3;
}

const genObj = genFunc();
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());
