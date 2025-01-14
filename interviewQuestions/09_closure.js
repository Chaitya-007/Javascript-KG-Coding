function randomFunc() {
  obj = { name: "Vivek", age: 28 };

  return function () {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  };
}

const initialClosure = randomFunc();

initialClosure();
