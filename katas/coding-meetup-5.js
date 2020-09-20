// https://www.codewars.com/kata/58287977ef8d4451f90001a0/train/javascript
function isSameLanguage(list) {
  //   every
  return list.every(({ language, firstName }) => language === list[0].language);
}
