function Person(name, age, message) {
  this.name = name;
  this.age = age;
  this.message = message;
}

Person.prototype.greet = function () {
  console.log(
    `Hello ${this.name}, my age is ${this.age}, and my message is ${this.message}`
  );
};

const person1 = new Person("Vivek", 28, "Good Morning");

person1.greet();

function Car(name, model, year) {
  this.name = name;
  this.model = model;
  this.year = year;
}

Car.prototype.getCar = function () {
  console.log(
    `The naem of car is ${this.name}, model is ${this.model}, and year is ${this.year}`
  );
};

const car1 = new Car("Audi", "A4", 2020);

car1.getCar();
