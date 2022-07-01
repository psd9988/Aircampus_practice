let n = 5;

for (let i = 1; i <= 5; i++) {
  let string = "";

  for (let j = 1; j <= 5; j++) {
    if (j == (n - i) - 1 || j == (n + i) - 3 || j == (n-i)+3 || j == (n + i) -7 )  {
      string = string + "  *  ";
    
    } else {
      string = string + `     `;
    }
  }
  console.log(string);
}
