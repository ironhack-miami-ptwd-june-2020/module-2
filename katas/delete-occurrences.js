// https://www.codewars.com/kata/554ca54ffa7d91b236000023
function deleteNth(arr, n) {
  //   let solution = [];
  //   // iterate over array
  //   arr.forEach((ele) => {
  //     count = 0;
  //     // another iteration
  //     solution.forEach(innerEle => {
  //       // compare values in the org array to the new values
  //       if(ele === innerEle) {
  //         count++;
  //       }
  //     })
  //     // if we see N amount of values we continue
  //     if(count < n) {
  //       //   else we push the value to the new array
  //       solution.push(ele)
  //     }
  //   })
  //   //   return new array
  //   return solution
  return arr.reduce(
    (a, v) => (a.filter((iv) => iv === v).length < n ? [...a, v] : a),
    []
  );
}
