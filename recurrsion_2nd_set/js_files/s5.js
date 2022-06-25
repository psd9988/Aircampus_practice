// Find the nth digit of the fibonacci series.

let count = 2;
let a = 0;
let b = 1;
let c = 1;
function fibonacci(n) {
  if (count <= n) {
    c = a + b;
    a = b;
    b = c;
    count++;

    return fibonacci(n);
  }
  console.log(c);
}
fibonacci(10);
