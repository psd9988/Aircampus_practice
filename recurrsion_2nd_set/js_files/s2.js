// Print all the numbers in descending order in the given range

function range(start, end) {
  if (start >= end) {
    console.log(start);
    start = start - 1;
    return range(start, end);
  }
}

console.log(range(10, 5));
