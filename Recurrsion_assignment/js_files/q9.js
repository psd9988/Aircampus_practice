// Given a number n, print all the odd numbers from 1 to n using recursion.

let start = 0;

function odd_num(n) {
  start = start + 1;
  if (start <= n) {
    if (start % 2 != 0) {
      console.log(start);
    }
    return odd_num(n);
  }
}
odd_num(20);
