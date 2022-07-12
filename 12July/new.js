// A manager wants to increment each of its employees' salaries by Rs.1000. You are given an array with the current salary of each employee. Return the array containing the incremented salary. Use array callback methods.

function goodManager(arr){
  let incrementedSalary = [];
    for(let i = 0; i<arr.length; i++){
      incrementedSalary.push(arr[i]+1000)
    }
    return incrementedSalary
  }console.log(goodManager([1234,3400,5400]))
 