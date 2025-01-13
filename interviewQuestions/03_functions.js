function doSomething() {
  console.log(this);
}

doSomething();

var obj = {
  name: "vivek",
  getName: function () {
    console.log(this.name);
  },
};

obj.getName();
