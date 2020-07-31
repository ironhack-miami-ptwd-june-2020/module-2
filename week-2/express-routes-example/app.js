// ================= FILE IMPORTS ===================
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("hbs");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

// ============= END FILE IMPORTS ===================

// --- --- --- --- --- --- --- --- --- --- --- --- --

// ========== MONGOOSE CONNECTION SETUP =============

mongoose
    .connect("mongodb://localhost/express-routes-example", {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then((x) => {
        console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`
        );
    })
    .catch((err) => {
        console.error("Error connecting to mongo", err);
    });

// ======== END MONGOOSE CONNECTION SETUP ===========

// --- --- --- --- --- --- --- --- --- --- --- --- --

// ============== MIDDLEWARE SETUP ==================

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ============ END MIDDLEWARE SETUP ================

// ========== EXPRESS VIEW ENGINE SET UP ============

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));

// ======= END EXPRESS VIEW ENGINE SET UP ===========

// --- --- --- --- --- --- --- --- --- --- --- --- --

// ============== GLOBAL VARIABLES ==================

// default value for title local
app.locals.title = "Express Routes Example";

// ============ END GLOBAL VARIABLES ================

// --- --- --- --- --- --- --- --- --- --- --- --- --

// ===================== ROUTES =====================
app.use("/", require("./routes/index"));
app.use("/examples", require("./routes/example"));
// =================== END ROUTES ===================

// --- --- --- --- --- --- --- --- --- --- --- --- --

// ============= EXPORT APP AT THE END ==============

module.exports = app;
