// ************************************************************************************
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array,
// you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) // returns [1, 3, 2, 8, 5, 4]
// ************************************************************************************

// solution 1:

const sortArray = arr => {
  // we want to take odd numbers into array
  // we'll loop through the original array and conditional if it's
  // loop through the original array, and push odds into empty array

  // sort the oddsArr
  // loop through original array and replace the odd values with the values from the sorted array

  const oddsArr = [];

  for (let i in arr) {
    if (arr[i] % 2 !== 0) {
      oddsArr.push(arr[i]);
    }
  }

  oddsArr.sort((a, b) => a - b);

  for (let i in arr) {
    if (arr[i] % 2 !== 0) {
      arr[i] = oddsArr.shift();
    }
  }

  return arr;
};

// solution 2:

const sortArray1 = arr => {
  const index = []; // holds indexes of even numbers

  arr
    .filter((el, i) => el % 2 && index.push(i))
    .sort((a, b) => a - b)
    .forEach((el, i) => (arr[index[i]] = el));

  return arr;
};

// solution 3:

const sortArray2 = arr => {
  const sortedOdds = arr.filter(el => el % 2 !== 0).sort((a, b) => a - b);
  return arr.map(el => (el % 2 !== 0 ? sortedOdds.shift() : el));
};

sortArray3([5, 3, 2, 8, 1, 4]); // == [1, 3, 2, 8, 5, 4]
