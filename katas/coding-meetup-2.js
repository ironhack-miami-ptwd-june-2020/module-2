//www.codewars.com/kata/58279e13c983ca4a2a00002a/train/javascript
function greetDevelopers(list) {
  // return mapped list ->
  //  inside map
  //  for each dev
  //   createnewprop and set it equal to string interpolation
  //   return dev to the map
  return list.map((dev) => {
    dev.greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`;
    return dev;
  });
}
