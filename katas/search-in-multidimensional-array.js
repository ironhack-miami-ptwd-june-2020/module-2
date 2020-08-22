// ************************************************************************************
// https://www.codewars.com/kata/52840d2b27e9c932ff0016ae/javascript
// Write a function that gets a sequence and value and returns true/false depending
// on whether the variable exists in a multidimensional sequence.

// Example:

// locate(['a','b',['c','d',['e']]],'e'); // should return true
// locate(['a','b',['c','d',['e']]],'a'); // should return true
// locate(['a','b',['c','d',['e']]],'f'); // should return false

// ************************************************************************************

// solution 1:

const locate = (arr, valueWeLookFor) => {
  return flatten(arr).includes(valueWeLookFor);
};

// 1. flatten the arr
// create an empty array
// loop through the original array and check if there is nested arrays
// if yes, flatten them and push into empty array
// no subarrays so just push to empty array
// 2. check if the vale exist in the flatten array

const flatten = arr => {
  let flattenArr = [];
  for (let i in arr) {
    if (Array.isArray(arr[i])) {
      flattenArr = flattenArr.concat(flatten(arr[i]));
    } else {
      flattenArr.push(arr[i]);
    }
  }
  return flattenArr;
};

locate(['a', 'b', ['c', 'd', ['e']]], 'y');

// solution 2:

const locate1 = (arr, valueWeLookFor) =>
  arr.some(elem => (Array.isArray(elem) ? locate(elem, valueWeLookFor) : elem === valueWeLookFor));

// locate(['a','b',['c','d',['e']]],'e'); // should return true
