const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('../../models/user');

const routeGuard = require('../../config/route-guard');

// auth:
const saltRounds = 10;

// **************** SIGNUP - GET ROUTE TO DISPLAY THE FORM **********************************

// .get() route ==> to display the SIGNUP form to users

router.get('/signup', (req, res) => res.render('auth-views/signup-form.hbs'));

// **************** SIGNUP - POST ROUTE TO PROCESS THE FORM *********************************

// .post() route ==> to process the SIGNUP form data

router.post('/signup', (req, res, next) => {
  //   console.log(req.body);
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.render('auth-views/signup-form.hbs', { errorMessage: 'All fields are mandatory!' });
    return;
  }

  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

  if (!regex.test(password)) {
    res.status(500).render('auth-views/signup-form.hbs', {
      errorMessage:
        'Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.'
    });
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
    .catch(err => {
      // console.log(err);

      if (err instanceof mongoose.Error.ValidationError) {
        // console.log(err.message);
        res.status(500).render('auth-views/signup-form.hbs', { errorMessage: err.message });
      } else if (err.code === 11000) {
        res.status(500).render('auth-views/signup-form.hbs', {
          errorMessage: 'Username and email need to be unique. Either username or email is already used.'
        });
      } else {
        next(err);
      }
    });
});

// **************** LOGIN - GET ROUTE TO DISPLAY THE FORM *********************************

// .get() route ==> to display the login form to users

router.get('/login', (req, res) => res.render('auth-views/login-form.hbs'));

// **************** LOGIN - POST ROUTE TO PROCESS THE FORM *********************************

// .post() route ==> to process form data

router.post('/login', (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.render('auth-views/login-form.hbs', { errorMessage: 'All fields are mandatory!' });
    return;
  }

  User.findOne({ email })
    .then(userDoc => {
      // console.log(userDoc);
      if (!userDoc) {
        res.render('auth-views/login-form.hbs', {
          errorMessage: 'Email is not registered. Try with  another email.'
        });
        return;
      } else if (bcryptjs.compareSync(password, userDoc.passwordHash)) {
        // console.log('session: ', req.session);

        // when the user is logged in, set the user as a key (loggedInUser (which is a placeholder))
        // set it to userDoc (which is a currently logged in user)
        req.session.loggedInUser = userDoc;

        // res.render('index.hbs', { user: userDoc });
        // res.render('index.hbs', { user: req.session.loggedInUser });
        res.render('index.hbs');
      } else {
        res.render('auth-views/login-form.hbs', { errorMessage: 'Incorrect password.' });
        return;
      }
    })
    .catch(err => next(err));
});

router.post('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

router.get('/user-profile', routeGuard, (req, res, next) => {
  if (req.session.visitCount) {
    req.session.visitCount += 1;
  } else {
    req.session.visitCount = 1;
  }

  res.render('index.hbs', {
    // user: req.session.loggedInUser,
    subtitle: 'This is a test by PTWD2020',
    visitCount: req.session.visitCount
  });
});

router.get('/secret', routeGuard, (req, res) => res.render('secret.hbs'));

module.exports = router;
