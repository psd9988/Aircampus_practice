let numOfStudents = [12,34,718,98,54,3,25,79,5];

let maxStudents = (arr)=> {
  let max = arr[0];
  for(let i = 1; i<arr.length; i++){
    if(max<arr[i]){
      max = arr[i];
    }
  }return max
}

console.log(maxStudents(numOfStudents));