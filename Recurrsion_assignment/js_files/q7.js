let myArr = [44, 35, 21, 3, 4, 99, 12, 10];
let count = 0;
let smallest = 0;

function smallest_of_arr(arr) {
  if (count + 1 < arr.length) {
    if (count == 0) {
      smallest = arr[count];
    }
    if (arr[count] < arr[count + 1]) {
      smallest = smallest > arr[count] ? arr[count] : smallest;
    } else {
      smallest = smallest > arr[count + 1] ? arr[count + 1] : smallest;
    }
    count = count + 1;
    return smallest_of_arr(arr);
  }

  console.log(smallest);
}

// console.log(smallest_of_arr(myArr) )
smallest_of_arr(myArr);
