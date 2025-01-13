// Example of exec() method
const regexExec = /hello/;
const resultExec = regexExec.exec("hello world");
console.log(resultExec); // Output: ["hello"]

// Example of test() method
const regexTest = /world/;
const resultTest = regexTest.test("hello world");
console.log(resultTest); // Output: true
