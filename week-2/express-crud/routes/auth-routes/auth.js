const express = require('express');
const router = express.Router();

const bcryptjs = require('bcryptjs');

const saltRounds = 10;

const User = require('../../models/user');

// .get() route ==> to display the signup form to users

router.get('/signup', (req, res) => res.render('auth-views/signup-form.hbs'));

// .post() route ==> to process form data

router.post('/signup', (req, res) => {
  //   console.log(req.body);
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.render('auth-views/signup-form.hbs', { errorMessage: 'All fields are mandatory!' });
    return;
  }

  bcryptjs
    .genSalt(saltRounds)
    .then(salt => bcryptjs.hash(password, salt))
    .then(hashedPassword => {
      //   console.log(hashedPassword);

      return User.create({
        // username: username
        username,
        email,
        passwordHash: hashedPassword
      });
    })
    .then(userDoc => console.log(userDoc))
    .catch(err => console.log(err));
});

module.exports = router;
