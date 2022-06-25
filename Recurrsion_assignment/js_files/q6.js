let num = 123456789
let count = 0;
function count_digits(n){
  if(n>0){
    n = Math.floor(n/10);
    count = count + 1;
    return count_digits(n)
  }console.log(count)
  
}

count_digits(num)