// Code 1

// let hero = {
//   powerLevel: 99,
//   getPower() {
//     return this.powerLevel;
//   },
// };

// let getPower = hero.getPower;

// let hero2 = { powerLevel: 42 };
// console.log(getPower());
// console.log(hero.getPower());
// console.log(getPower.apply(hero2));

// Code 2

const a = function () {
  console.log(this);

  const b = {
    func1: function () {
      console.log(this);
    },
  };

  const c = {
    func2: () => {
      console.log(this); // "this" refers to the parent scope, which is the global scope
    },
  };

  b.func1();
  c.func2();
};

a();

// Code 3

const b = {
  name: "Vivek",
  f: function () {
    var self = this; // Step 1: Capture 'this' in 'self'
    console.log(this.name); // Step 2: 'this' refers to 'b', so 'this.name' is 'Vivek'
    (function () {
      console.log(this.name); // Step 3: 'this' refers to the global object, so 'this.name' is 'undefined'
      console.log(self.name); // Step 4: 'self' refers to 'b', so 'self.name' is 'Vivek'
    })();
  },
};
b.f(); // Step 5: Call 'f' as a method of 'b'

// Output:
// 'Vivek' (Step 2)
// 'undefined' (Step 3)
// 'Vivek' (Step 4)
