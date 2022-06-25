// Print all the numbers in the given range

function numbers(start, end) {
  if (start <= end) {
    console.log(start);
    start++;
    return numbers(start, end);
  }
}
numbers(5, 10);
