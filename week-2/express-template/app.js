// ================= FILE IMPORTS ===================
require("dotenv").config();

const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

// ============= END FILE IMPORTS ===================

// --- --- --- --- --- --- --- --- --- --- --- --- --

// ========== MONGOOSE CONNECTION SETUP =============

mongoose
    .connect("mongodb://localhost/mongoose-example", { useNewUrlParser: true })
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

// ============ END MIDDLEWARE SETUP ================

// ========== EXPRESS VIEW ENGINE SET UP ============

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));

// ======= END EXPRESS VIEW ENGINE SET UP ===========

// --- --- --- --- --- --- --- --- --- --- --- --- --

// ============== GLOBAL VARIABLES ==================

// default value for title local
app.locals.title = "Mongoose Example";

// ============ END GLOBAL VARIABLES ================

// --- --- --- --- --- --- --- --- --- --- --- --- --

// ===================== ROUTES =====================
app.use("/", require("./routes/index"));

// =================== END ROUTES ===================

// --- --- --- --- --- --- --- --- --- --- --- --- --

// ============= EXPORT APP AT THE END ==============

module.exports = app;
