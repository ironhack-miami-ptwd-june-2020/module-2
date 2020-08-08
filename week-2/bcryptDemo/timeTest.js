const bcryptjs = require('bcryptjs');
const plainPassword1 = 'HelloWorld';

for (let saltRounds = 10; saltRounds < 19; saltRounds++) {
  console.time(`bcryptjs | cost: ${saltRounds}, time to hash`);
  bcryptjs.hashSync(plainPassword1, saltRounds);
  console.timeEnd(`bcryptjs | cost: ${saltRounds}, time to hash`);
}
