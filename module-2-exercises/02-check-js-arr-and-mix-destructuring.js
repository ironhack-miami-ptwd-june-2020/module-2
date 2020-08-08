// 1: What would be expected outputs and why?

// a:
const [a, b] = [1];
console.log(a * b); // <== NaN
// b => undefined
// 1 * undefined = NaN

// b:
const [a, b = 1] = [2];
console.log(a * b); // <== 2
// a => 2
// b => 1

// c:
let [a, b = 2, c, d = 1] = [3, 4];
console.log(a, b, c, d); // ==> 3, 4, undefined, 1

// ************************************************************************************

// 2:

const greenSmoothie = {
  leaf: 'spinach',
  veggie: 'bok choy',
  seed: 'ground flex seeds',
  nut: 'peanut',
  liquid: 'almond milk'
};

function getIngredients({ leaf, veggie, seed, nut, liquid }) {
  return `To make a green smoothie,  you  should add: ${leaf}, ${veggie}, ${seed}, ${nut} and ${liquid}.`;
}

getIngredients(greenSmoothie);

// To make a green smoothie, you should add: spinach, bok choy, ground flex seeds, peanut and almond milk.
