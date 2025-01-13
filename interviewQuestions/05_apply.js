function PrintMessage(message) {
  console.log(`hello ${this.name}, this is my ${message}`);
}

const obj2 = { name: "Vivek" };

PrintMessage.apply(obj2, ["Good Morning"]);
