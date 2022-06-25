// Print sum of all the numbers in the given range.
let total = 0;
function sum(start, end) {
  if (start <= end) {
    total = total + start;

    return sum(start + 1, end);
  }
  console.log(total);
}
sum(1, 3);
