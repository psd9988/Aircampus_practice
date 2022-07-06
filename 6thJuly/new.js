let myArray = [1,2,3,4,3,3]

function indexOf(arr, element){
let indexCheck = 0;
for(let i = 0; i<arr.length;i++){
 
  if(arr[i] == element){
    indexCheck = i
  }else if(indexCheck==0){
    indexCheck = `Not Found`
  }

  }return indexCheck
}console.log(indexOf(myArray, 9))