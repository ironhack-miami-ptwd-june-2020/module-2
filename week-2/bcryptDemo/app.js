const bcryptjs = require('bcryptjs');

const saltRounds = 10;

const pass1 = 'HelloWorld';
const pass2 = 'helloworld';

// salt

const salt = bcryptjs.genSaltSync(saltRounds);

console.log(`salt ----> ${salt}`);

const hash1 = bcryptjs.hashSync(pass1, salt);

console.log(`hash1 ------> ${hash1}`);

const isTruePassword = bcryptjs.compareSync(pass2, hash1);
console.log(`is it matching:  ${isTruePassword}`);
