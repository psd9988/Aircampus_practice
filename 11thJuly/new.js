// Given an array of numbers, create a new array by multiplying each number with its square root from the given array. Return original array concatenated with the new array. Use map callback method.

let myarr = [4,16,9]

function multiply(arr){
  let answer = arr.map((n)=>(n**0.5)*n)
  return answer
}

console.log(multiply(myarr))