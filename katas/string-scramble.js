// https://www.codewars.com/kata/5822d89270ca28c85c0000f3
function scramble(str, arr) {
  //   let newStr = '';
  // //   iterate over str
  //   [...str].forEach((_, ind) => {
  // //   create new string knowing position of each char
  //     let curPos = arr.indexOf(ind);
  //     newStr += str[curPos]
  //   })
  // //   return new string
  //   return newStr;
  return [...str].reduce((a, v, i) => a + str[arr.indexOf(i)], "");
}
