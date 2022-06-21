let input = 121;
let i = input;
let rem;
let reverse = '';
while(i>0){
  rem = i%10;
  reverse = reverse + '' + rem;
  i = Math.floor(i/10);
}if(input == reverse){
  console.log(`Horray! ${input} is similar to it's 
  reverse ${reverse}!`)
}else{
  console.log(`Sorry ${input} is different than 
  it's reverse ${reverse}`)
}