// Recursion questions:-

// Print numbers in ascending order: -

function printRange(start, end) {
    if(start<=end){
        console.log(start);
        start++;
        printRange(start, end);
    }
}

printRange(1, 10);




// print in descending order : -

function desc(end){
  if(end > 0){
    console.log(end)
    return(desc(end - 1))
  }
}

desc(10)


// find even numbers using recursion in given range: -

function even(start, end){
  if(start <= end){
    if(start % 2 == 0){
      console.log(start);
      
  }
  return even(start + 1, end);
}
}
even(1,20)


// find factorial using recursion: -

function facto(n){
  if(n>0){
    return n*facto(n-1);

  }
  else{
    return 1;
  }
}

console.log(facto(5));
