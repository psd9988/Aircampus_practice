let count = 1;
let n = 5;

for (let i = 1; i <= n; i++) {
  let string = "";
  let space = " ";
  for (let j = 1; j <= i; j++) {
    if (count <= 9) {
      space = "  ";
    }
    string = string + count + space;
    count++;
  }
  console.log(string);
}
