// https://www.codewars.com/kata/56069d0c4af7f633910000d3/train/javascript
function search(budget, prices) {
  // if budget <= 0 return ''
  // filter prices array
  //   filter out everyting that's > budget
  //   sort the filtered array in asc order
  //   return concatinated array(,)

  const filteredPrices = prices.filter((price) => price <= budget);
  filteredPrices.sort((a, b) => a - b);
  return filteredPrices.join();
}
