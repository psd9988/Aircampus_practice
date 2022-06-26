let rem = "";
let reverse = "";
let m = "given_number";
function reverser(n) {
  if (m == "given_number") {
    m = n;
  }
  while (n > 0) {
    rem = rem + (n % 10);
    n = Math.floor(n / 10);
  }
  return rem;
}
console.log(reverser(1234));
