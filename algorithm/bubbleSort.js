const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 10, -1, -0];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      // swap process

      let temp = arr[j];

      arr[j] = arr[j + 1];

      arr[j + 1] = temp;
    }
  }
}
console.log(arr.join(","));
