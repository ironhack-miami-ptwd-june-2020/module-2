// ************************************************************************************
// https://www.codewars.com/kata/moving-zeros-to-the-end/javascript
// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
// ************************************************************************************

// solution 1:

const moveZeros = arr => {
  // filter zeros and no-zeros into 2 separate arrays and save them into variables
  // concatenate them in the end

  let zeros = arr.filter(x => x === 0);
  let noZeros = [...arr].filter(x => x !== 0);

  return noZeros.concat(zeros);
};

// solution 2:

const moveZeros1 = arr => {
  const result = [];
  const zeros = [];

  for (let i in arr) {
    if (arr[i] === 0) {
      zeros.push(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }

  return result.concat(zeros);
};

moveZeros1([false, 0, 1, 0, 1, 2, 0, 1, 3, 'a']); // returns[false,1,1,2,1,3,"a",0,0]
