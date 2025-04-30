const array = new Array();

for (let i = 0; i < 100_000; i++) {
  array.push(i * 2);
}

function binarySearch(array, number) {
  let left = 0;
  let right = array.length;
  let iterations = 0;

  while (left < right) {
    iterations++;
    let middle = parseInt((left + right) / 2);

    console.log({
      left,
      right,
      middle,
    });

    if (array[middle] === number) {
      console.log("Iterations: ", iterations);
      return middle;
    } else if (array[middle] < number) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  return -1;
}

console.log(binarySearch(array, 25448));
