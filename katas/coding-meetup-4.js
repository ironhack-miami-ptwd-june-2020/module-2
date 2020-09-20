// https://www.codewars.com/kata/5827bc50f524dd029d0005f2/train/javascript
function getFirstPython(list) {
  // iterate the list
  //   check for python lang devs
  //   replace the acc
  //   otherwise def

  //   const array = list.filter((dev) => dev.language === 'Python');
  //   if(array.length > 0) {
  //     return `${array[0].firstName}, ${array[0].country}`;
  //   } else {
  //     return `There will be no Python developers`;
  //   }
  return list.reduce((acc, dev) => {
    return dev.language === "Python" &&
      acc === "There will be no Python developers"
      ? `${dev.firstName}, ${dev.country}`
      : acc;
  }, "There will be no Python developers");
}
