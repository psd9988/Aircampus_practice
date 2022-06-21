let a = 153;
let num = a;
let result = 0;
let cubeOfRem = 0;
let rem;
while(num>0){
  rem = num%10;
  num = Math.floor(num/10);
  cubeOfRem = cubeOfRem + (rem**3);
}if( a =  cubeOfRem){
  console.log(`${a} is an Armstrong number!`)
}else{
  console.log(`${a} is not an Armstrong number!`)
}