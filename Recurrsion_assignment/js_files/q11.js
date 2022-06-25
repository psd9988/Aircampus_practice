let rem = "";
let reverse = "";
let numOfDigs = 0;
let m = "given_number";
function palindrome(n) {
  if (m == "given_number") {
    m = n;
  }
  if (n > 0) {
    rem = rem + (n % 10);
    n = Math.floor(n / 10);
    numOfDigs = numOfDigs + 1;
    return palindrome(n);
  }
  if (rem == m) {
    console.log(`Number is Palindrome`);
  } else {
    console.log(`Not Palindrome`);
  }
}

palindrome(1221);
