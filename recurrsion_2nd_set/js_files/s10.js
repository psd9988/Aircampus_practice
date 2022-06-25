// Write a recursive program to find the power of given number and exponent. (without using Math.pow and exponent operator(**)).

function power(num, exp) {
  if (exp === 0) {
    return 1;
  } else {
    return num * power(num, exp - 1);
  }
}

console.log(power(2, 3));
