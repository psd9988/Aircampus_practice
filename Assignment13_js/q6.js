let input = 6789;
let even = 0;
let rem = 0;
let i = input;
while(i>0){
  rem = i%10;
  if(rem%2==0){
    console.log(rem)
  }
  i = Math.floor(i/10)
 
}
