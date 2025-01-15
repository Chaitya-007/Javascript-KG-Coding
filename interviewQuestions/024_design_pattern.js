// Creational Design Pattern: Singleton Pattern
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true

// Structural Design Pattern: Decorator Pattern
class Coffee {
  cost() {
    return 5;
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 1;
  }
}

let myCoffee = new Coffee();
myCoffee = new MilkDecorator(myCoffee);

console.log(myCoffee.cost()); // 6

// Behavioral Design Pattern: Observer Pattern
class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers(message) {
    this.observers.forEach((observer) => observer.update(message));
  }
}

class Observer {
  update(message) {
    console.log(`Observer received message: ${message}`);
  }
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers("Hello Observers!");
// Observer received message: Hello Observers!
// Observer received message: Hello Observers!
