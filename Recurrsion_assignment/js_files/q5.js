let myArr = [44,35,21,89,63,72,99,12,7,10];
let index = 0;

function print(arr){
    if(index<arr.length){
      console.log(arr[index]);
      index = index + 1;
      print(arr);
    }
}

print(myArr);

