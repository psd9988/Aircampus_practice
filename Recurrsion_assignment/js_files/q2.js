// Given a number n, print numbers from 1 to n using recursion.

let start = 1;
function numbers(n){
    if(start<=n){
        console.log(start);
        start++
        return numbers(n);
    }
  


}
(numbers(7));;