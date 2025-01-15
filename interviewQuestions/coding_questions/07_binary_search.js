const arr = [5, 6, 7, 8, 9, 10];
let n = arr.length;

// The value of mid is a float because the division operation (l + r) / 2 can result in a non-integer value. In JavaScript, dividing two integers does not automatically round the result to an integer.

function search(arr, key) {
  let l = 0;
  let r = n - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] < key) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return -1;
}

if (search(arr, 7) !== -1) {
  console.log("Element found");
} else {
  console.log("Element not found");
}
