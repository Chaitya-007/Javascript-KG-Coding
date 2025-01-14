class student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  getDetails() {
    console.log(
      `My name is ${this.name}, my age is ${this.age}, and my grade is ${this.grade}`
    );
  }
}

const obj = new student("Vivek", 28, "A");
obj.getDetails();
