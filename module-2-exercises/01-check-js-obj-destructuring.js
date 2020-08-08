// Given the object 'data', use the object destructuring to be able
// to print student first and last name, favorite football club,
// as well as the city and the country this student is coming from.

// BONUS: Write a function to capitalize all the words that need to be capitalized.

const data = {
  name: {
    firstName: 'ana',
    lastName: 'marino'
  },
  isStudent: true,
  favoriteFootballTeam: 'fc barcelona',
  hometown: {
    city: 'buenos aires',
    country: 'argentina'
  }
};

// ... your  code  here

const {
  name: { firstName, lastName },
  favoriteFootballTeam,
  hometown: { city, country }
} = data;

console.log(`Student ${firstName} ${lastName}, from ${city} (${country}) loves ${favoriteFootballTeam}.`);
//  => Student ana marino, from buenos aires (argentina) loves fc barcelona.

// BONUS

const capitalize = word => {
  // if there is more than one word in the string we want to capitalize (ie. 'buenos aires')
  if (word.includes(' ')) {
    const splitted = word.split(' '); // we want to split the string on separate words ('buenos', 'aires') ...
    for (let i = 0; i < splitted.length; i++) {
      splitted[i] = splitted[i][0].toUpperCase() + splitted[i].slice(1); // ... so we can grab the first letter and capitalize it
    }
    return splitted.join(' '); // and then make the string with multiple (but now capitalized) words (ie. 'Buenos Aires')
  }
  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`; // if there  is one word in the string we want to capitalize
};

const getOutput = ({ name: { firstName, lastName }, favoriteFootballTeam, hometown: { city, country } }) =>
  `Student ${capitalize(firstName)} ${capitalize(lastName)}, 
  from ${capitalize(city)} (${capitalize(country)}) 
  loves ${capitalize(favoriteFootballTeam)}.`;

getOutput(data);
