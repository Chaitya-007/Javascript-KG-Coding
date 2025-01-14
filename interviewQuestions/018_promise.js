function calculateSum(...args) {
  return new Promise((resolve, reject) => {
    if (args.length > 3) {
      reject("The number of arguments should be less than or equal to 3");
    } else {
      let sum = 0;
      for (let i = 0; i < args.length; i++) {
        sum += args[i];
      }

      resolve(`the sum is ${sum}`);
    }
  });
}

calculateSum(1, 2, 3)
  .then((resut) => console.log(resut))
  .catch((error) => console.log(error));

calculateSum(1, 2, 3, 4)
  .then((resut) => console.log(resut))
  .catch((error) => console.log(error));
