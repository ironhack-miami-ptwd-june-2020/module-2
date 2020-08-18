const express = require("express");
const router = express.Router();
const axios = require("axios");

/* GET home page */
router.get("/", (req, res, next) => {
    res.render("index");
});

// GET all characters
router.get("/allCharacters", (req, res, next) => {
    console.log("Looking for all characters");
    axios
        .get("https://ih-crud-api.herokuapp.com/characters")
        .then((response) => {
            res.status(200).json(response.data);
        })
        .catch((err) => {
            console.log(`Error while getting the list of characters: ${err}`);
            next(err);
        });
});

// POST a new character
router.post("/addCharacter", (req, res, next) => {
    axios
        .post("https://ih-crud-api.herokuapp.com/characters", req.body)
        .then((response) => {
            res.status(200).json(response.data);
        })
        .catch((err) => next(err));
});

// GET character details
router.get("/details/:id", (req, res, next) => {
    axios
        .get(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`)
        .then((response) => {
            res.render("characterDetails", { character: response.data });
        })
        .catch((err) => next(err));
});

// PATCH update character info
router.patch("/update/:id", (req, res, next) => {
    console.log("Updating Character: ", req.body);
    axios
        .patch(
            `https://ih-crud-api.herokuapp.com/characters/${req.params.id}`,
            req.body
        )
        .then((response) => {
            console.log({ response: response.data });
            res.status(200).json(response.data);
        })
        .catch((err) => next(err));
});

// DELETE delete character
router.post("/delete/:id", (req, res, next) => {
    console.log({ delete: req.params.id });
    axios
        .delete(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`)
        .then(() => {
            // next();
            res.redirect("back");
        })
        .catch((err) => next(err));
});

module.exports = router;
