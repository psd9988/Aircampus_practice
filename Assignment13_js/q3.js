let a = process.argv[2];
let first = a;
let last = a%10;

while(first >= 10){
  first = first/10;
}

console.log(`First digit is ${Math.floor(first)}`)
console.log(`Last digit is ${last}`)

