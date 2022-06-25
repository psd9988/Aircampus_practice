let multiplier = 2;
let prime = true;
function check_prime(num) {
  if (multiplier < num) {
    if (num % multiplier == 0) {
      prime = false;
      multiplier++;
      return check_prime(num);
    }
    if (prime) {
      console.log(`It is prime`);
    } else {
      console.log(`[Not prime]`);
    }
  }
}

check_prime(17);
