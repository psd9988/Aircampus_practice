// Print the product of all the numbers in the given range.
let total = 1;
function sum(start, end) {
  if (start <= end) {
    total = total * start;
    start = start + 1;
    return sum(start, end);
  }
  console.log(total);
}
sum(1, 5);
