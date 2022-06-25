let a = 0;
let sum = 0;
function sumOfEvens() {
  a = a + 1;
  if (a <= 10) {
    if (a % 2 == 0) {
      sum = sum + a;
    }

    return sumOfEvens();
  }
  return sum;
}
console.log(sumOfEvens());
