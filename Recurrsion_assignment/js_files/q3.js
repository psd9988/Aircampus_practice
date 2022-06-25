// Given a number n, print numbers from n to 1 using recursion.

function numbers(n) {
  if (n > 1) {
    console.log(n);
    return numbers(n - 1);
  }
}

numbers(5);

/**



function running 1first time: -

NOTE: - 1. parameter(n)  used inside the function call is replaced with the (argument(5) as well as the (return numbers(n-1) is replaced with (return numbers(5-1).

2. condition is checked if n > 1.

3. The argument(5) is printed as we are using console.log(n) inside the function.

)

 function numbers(5){
    if(5>1){                --> condition is checked and if true the below code runs.
      console.log(5);       --> number 5 is printed as it takes place of our parameter n.
      return numbers(5-1);  --> The most important part where the functions 
                                tells itself to repeat.
    }
}


___________________________________________________________________

function running  2second time: -

NOTE: -The  used inside the function is replaced with the parameter(n))

 function numbers(4){
    if(4>1){
      console.log(4);
      return numbers(4-1);
    }
}


 
**/
