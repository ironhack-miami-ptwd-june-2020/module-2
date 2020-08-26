// https://www.codewars.com/kata/56747fd5cb988479af000028
function getMiddle(s) {
  //   let length = Math.floor(s.length/2);
  //   // check the length of the word
  //   if(s.length % 2 === 0) {
  //     // return two middle chars if it's even
  //     let string = s.slice(length-1, length+1)
  //     return string;
  //   }
  //   else {
  //     // return middle letter if it's odd
  //     return s[length];
  //   }
  //   console.log(Number(s.length/2))
  return s.length % 2 === 0
    ? s.slice(s.length / 2 - 1, s.length / 2 + 1)
    : s[Math.floor(s.length / 2)];
}
