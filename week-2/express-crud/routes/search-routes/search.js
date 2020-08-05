const express = require("express");
const router = express.Router();
const Movie = require("../../models/movie");
const Cast = require("../../models/cast");

/* GET home page */
router.get("/", (req, res, next) => {
    console.log({ query: req.query });
    Movie.find({ title: new RegExp(req.query.query, "i") })
        .then((movieResultsFromDB) => {
            console.log({ movieResultsFromDB });
            Cast.find({
                $or: [
                    { firstName: new RegExp(req.query.query, "i") },
                    { lastName: new RegExp(req.query.query, "i") },
                ],
            })
                .then((castMemberSearchResults) => {
                    console.log({ castMemberSearchResults });

                    data = {
                        movieResults: movieResultsFromDB,
                        castResults: castMemberSearchResults,
                    };

                    res.render("search-views/search", data);
                })
                .catch((err) =>
                    console.log(`Error searching for cast member: ${err}`)
                );
        })
        .catch((err) => console.log(`Error searching for movie: ${err}`));
});

module.exports = router;
