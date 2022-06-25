// Find the factorial of a given number n.
let facto = 1;
function factorial(n) {
  if (n > 0) {
    facto = facto * n;
    return factorial(n - 1);
  }
  return facto;
}
console.log(factorial(5));
