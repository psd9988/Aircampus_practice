// Print all the even numbers in the given range

function even(start, end) {
  if (start <= end) {
    if (start % 2 == 0) {
      console.log(start);
    }
    start++;
    return even(start, end);
  }
}

even(1, 10);
