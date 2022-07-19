// Given an integer array, find all the elements which are divisible by n and return the count

function count_all_divisions(arr,n){
  let divisibleNums = 0
  for(let i = 0; i<arr.length; i++){
    if(arr[i] % n == 0){
      divisibleNums++
    }
    
  }return divisibleNums
}console.log(count_all_divisions([1, 5, 7, 8],
1))

exports.count_all_divisions = count_all_divisions