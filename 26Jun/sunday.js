let num = 1221;
let reverse = "";
let duplicate_num = num;

while (num > 0) {
  reverse = reverse + (num % 10);
  num = Math.floor(num / 10);
}
if (reverse == duplicate_num) {
  console.log(duplicate_num + " is a palindrome");
} else {
  console.log(duplicate_num + " is not a palindrome");
}
