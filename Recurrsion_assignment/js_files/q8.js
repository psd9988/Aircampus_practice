let count = 1;

function binary(num) {
  if (count <= 1) {
    console.log(num.toString(2));
    count = count++;
  }
}

binary(156);

// _________________________________________________________________
// let num = 156;
// let rem = 0;
// let total = "";
// let binary = "";

// for (let i = 1; num > 0; i++) {
//   rem = num % 2;

//   total = total + rem;

//   num = Math.floor(num / 2);
// }
// while (total > 0) {
//   binary = binary + (total % 10);
//   total = Math.floor(total / 10);
// }

// console.log(binary);
