// https://www.codewars.com/kata/5539fecef69c483c5a000015
function backwardsPrime(start, stop) {
  // your code here
  let result = [];
  for (let i = start; i <= stop; i++) {
    // check if the number is prime
    // if it is prime check if the backwards no is prime too
    if (isPrime(i) && isReversePrime(i)) {
      result.push(i);
    }
  }
  return result;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function isReversePrime(num) {
  let reverseNum = +num.toString().split("").reverse().join("");
  if (num !== reverseNum) {
    return isPrime(reverseNum);
  }
  return false;
}
