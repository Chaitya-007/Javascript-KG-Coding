const arr = [2, 3, 4, 5, 7];

console.log("Intial array ", arr);

function rotate(arr, r) {
  while (r > 0) {
    let i = arr.length - 1;

    while (i > 0) {
      let prev = arr[i - 1];
      arr[i - 1] = arr[i];
      arr[i] = prev;
      i--;
    }
    r--;
  }

  console.log(arr);
}

function optimumRotate(arr, r) {
  while (r > 0) {
    let last = arr[arr.length - 1];
    arr.pop();
    arr.unshift(last);
    r--;
  }

  console.log(arr);
}

// rotate(arr, 3);
optimumRotate(arr, 3);
