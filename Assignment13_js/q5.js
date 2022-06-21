let input = 44;
let second_last_digit;
let product = 1;


for( let i = 1; i<=input; i++){
  second_last_digit = Math.floor((i%100) / 10);
  
  if(second_last_digit==4 && i%2==0){
  product = product * i;
  }



}

console.log(product)