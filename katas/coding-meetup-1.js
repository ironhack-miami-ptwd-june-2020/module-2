//www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript
function countDevelopers(list) {
  //   count and init to 0
  //   iterate over the list
  //   for every obj that had props we want we inc counter
  //   return the counter
  //   return list.filter(dev => dev.continent === 'Europe' && dev.language === 'JavaScript').length
  let count = 0;
  list.forEach((dev) => {
    if (dev.continent === "Europe" && dev.language === "JavaScript") {
      count++;
    }
  });
  return count;
}
