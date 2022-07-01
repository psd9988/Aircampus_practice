let n = 5;
let fibo = 1;
let a = 0;
let b = 1;
for (let i = 1; i <= n; i++) {
  let string = "";
  let space = " ";
  for (let j = 1; j <= i; j++) {
    if (fibo <= 99) {
      space = "  ";
    }
    if (fibo <= 9) {
      space = "   ";
    }
    if (fibo > 99) {
      space = " ";
    }

    string = string + fibo + space;
    fibo = a + b;
    a = b;
    b = fibo;
  }
  console.log(string);
}
