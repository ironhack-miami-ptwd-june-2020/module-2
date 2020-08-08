const bcryptjs = require('bcryptjs');

const plainPassword1 = 'HelloWorld';

const saltRounds = 10;

bcryptjs
  .genSalt(saltRounds)
  .then(salt => {
    //   console.log(salt);
    return bcryptjs.hash(plainPassword1, salt);
  })
  .then(hash => console.log(hash))
  .catch(err => console.error(err.message));
