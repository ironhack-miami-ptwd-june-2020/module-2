// Sort students by best score and list best 3 as fistPlace, secondPlace, thirdPlace.
// Add everyone else in the array.

const students = [
  {
    name: 'ana',
    score: 5.4
  },
  {
    name: 'ivan',
    score: 7.5
  },
  {
    name: 'milo',
    score: 4.3
  },
  {
    name: 'igor',
    score: 7.0
  },
  {
    name: 'george',
    score: 8.9
  },
  {
    name: 'jess',
    score: 10.0
  },
  {
    name: 'kevin',
    score: 8.8
  },
  {
    name: 'beth',
    score: 7.1
  }
];

function sortByScore(arr) {
  const sorted = [...arr].sort((a, b) => (a.score < b.score ? 1 : -1));

  const [firstPlace, secondPlace, thirdPlace, ...rest] = sorted;

  return { firstPlace, secondPlace, thirdPlace, rest };
}

sortByScore(students);

// {
//   firstPlace: { name: 'jess', score: 10 },
//   secondPlace: { name: 'george', score: 8.9 },
//   thirdPlace: { name: 'kevin', score: 8.8 },
//   rest: [
//     { name: 'ivan', score: 7.5 },
//     { name: 'beth', score: 7.1 },
//     { name: 'igor', score: 7 },
//     { name: 'ana', score: 5.4 },
//     { name: 'milo', score: 4.3 }
//   ]
// }
