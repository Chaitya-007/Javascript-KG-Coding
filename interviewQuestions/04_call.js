function sayHello() {
  console.log(`Hello ${this.name}`);
}

const obj = { name: "Vivek" };

sayHello.call(obj);

function PrintMessage(message) {
  console.log(`Hello ${this.name}, this is my ${message}`);
}

const obj1 = { name: "Mahesh" };

PrintMessage.call(obj1, "pet Tippu");
