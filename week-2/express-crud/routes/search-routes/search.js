const express = require("express");
const router = express.Router();
const Movie = require("../../models/movie");

/* GET home page */
router.get("/", (req, res, next) => {
    console.log({ query: req.query });
    Movie.find({ title: new RegExp(req.query.query, "i") })
        .then((resultsFromDB) => {
            console.log({ resultsFromDB });
            res.render("search-views/search", { searchResults: resultsFromDB });
        })
        .catch((err) => console.log(`Error searching for query: ${err}`));
});

module.exports = router;
