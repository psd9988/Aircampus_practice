// Given an array, copy the 3rd element to the 2nd element of the array if the size of array is less than 5 else copy all the elements from 3rd element to 2nd element of the array.

let myArray = [2, 5, 3, 7, 5, 19, 10]

// let myArray = [1, 2, 3]

function copyElement(arr){
  let slice = []
  let slice2 = []
    for(let i = 0; i<arr.length; i++){
      if(arr.length<5){
        arr[1] = arr[2]
        return arr
      }else{
        slice = arr.slice(2)
        slice2 = slice.unshift(arr[0])
        slice2 = slice.push(arr[2])
        
      }return slice
    }
}console.log(copyElement(myArray))