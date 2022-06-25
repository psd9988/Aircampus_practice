// Given a number n, print all the even numbers from n to 1 using recursion.

function even_numbers(n) {
  if (n > 0) {
    if (n % 2 == 0) {
      console.log(n);
    }
    return even_numbers(n - 1);
  }
}

even_numbers(20);
