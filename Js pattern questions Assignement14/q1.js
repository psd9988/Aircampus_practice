// QNo 1. Print the following Pattern.
// Input
// You will be given a number n
// 1 <= n <= 100
// Output
// Print the following pattern
// Sample Output:
// For n = 5

// *        *
//   *   *
//     *
//   *   *
// *        *

let n = 5;

for (let i = 1; i <= n; i++) {
  let string = "";
  for (let j = 1; j <= 5; j++) {
    if (i == j || i + j == 6) {
      string = string + "*";
    } else {
      string = string + " ";
    }
  }
  console.log(string);
}
