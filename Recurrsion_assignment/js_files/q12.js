// Given a number n, find 2^n using recursion.

function power(n) {
  if (n === 0) {
    return 1;
  }
  return 2 * power(n - 1);
}

console.log(power(3));
