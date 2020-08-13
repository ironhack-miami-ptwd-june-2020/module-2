// ================= FILE IMPORTS ===================
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const mongoose = require('mongoose');
const path = require('path');

// const cookieParser = require('cookie-parser');

const app = express();

require('./config/session.config')(app);

const bindUserToView = require('./config/user-in-view-local');

// ============= END FILE IMPORTS ===================

// --- --- --- --- --- --- --- --- --- --- --- --- --

// ========== MONGOOSE CONNECTION SETUP =============

require('./config/mongoose-setup');

// ======== END MONGOOSE CONNECTION SETUP ===========

// --- --- --- --- --- --- --- --- --- --- --- --- --

// ============== MIDDLEWARE SETUP ==================

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ============ END MIDDLEWARE SETUP ================

// ========== EXPRESS VIEW ENGINE SET UP ============

// app.use(cookieParser());

app.use(bindUserToView);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

// ======= END EXPRESS VIEW ENGINE SET UP ===========

// --- --- --- --- --- --- --- --- --- --- --- --- --

// ============== GLOBAL VARIABLES ==================

// default value for title local
app.locals.title = 'Express Template';

// ============ END GLOBAL VARIABLES ================

// --- --- --- --- --- --- --- --- --- --- --- --- --

// ===================== ROUTES =====================

app.use('/', require('./routes/index.routes'));
app.use('/movies', require('./routes/movie-routes/movie'));
app.use('/search', require('./routes/search-routes/search'));
app.use('/casts', require('./routes/cast-routes/cast'));
app.use('/auth', require('./routes/auth-routes/auth'));

// =================== END ROUTES ===================

// --- --- --- --- --- --- --- --- --- --- --- --- --

// ============= EXPORT APP AT THE END ==============

module.exports = app;
