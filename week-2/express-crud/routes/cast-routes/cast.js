const express = require("express");
const router = express.Router();
const Cast = require("../../models/cast");
const Movie = require("../../models/movie");

/* GET cast members list page */
router.get("/", (req, res, next) => {
    Cast.find()
        .then((castMembers) => {
            console.log({ castMembers });
            res.render("cast-views/casts", { castMembers });
        })
        .catch((err) =>
            console.log(`Error getting list of cast members: ${err}`)
        );
});

/* GET to add cast member form page */
router.get("/create", (req, res, next) => {
    res.render("cast-views/cast-create");
});

/* POST add cast member to database */
router.post("/create", (req, res, next) => {
    const castMember = {
        firstName: req.body.theFirstName,
        lastName: req.body.theLastName,
        age: req.body.theAge,
        wonAward: req.body.awardWon ? req.body.awardWon : false,
        role: req.body.theRole ? req.body.theRole : "Extra",
    };

    Cast.create(castMember)
        .then((newlyCreatedCastMember) => {
            console.log({ newlyCreatedCastMember });
            res.redirect(`/casts/details/${newlyCreatedCastMember._id}`);
        })
        .catch((err) => console.log(`Error creating a cast member: ${err}`));
});

/* GET display edit cast member page */
router.get("/details/edit/:castMemberId", (req, res, next) => {
    Cast.findById(req.params.castMemberId)
        .then((castMemberFromDB) => {
            Movie.find()
                .then((movies) => {
                    const data = {
                        ...castMemberFromDB,
                        movies,
                        edit: true,
                    };
                    res.render("cast-views/cast-details", data);
                })
                .catch((err) =>
                    console.log(
                        `Error getting movies when editing cast member: ${err}`
                    )
                );
        })
        .catch((err) =>
            console.log(`Error finding cast member in Database to edit: ${err}`)
        );
});

/* GET see the details of the cast member */
router.get("/details/:castMemberId", (req, res, next) => {
    console.log({ theId: req.params.castMemberId });
    Cast.findById(req.params.castMemberId)
        .populate("movies")
        .then((castMemberFromDB) => {
            const data = {
                ...castMemberFromDB,
                edit: false,
            };
            console.log({ castMemberFromDB });
            res.render("cast-views/cast-details", data);
        })
        .catch((err) =>
            console.log(`Error finding cast member in Database: ${err}`)
        );
});

/* POST update the information for the cast member */
router.post("/update/:castMemberId", (req, res, next) => {
    console.log({ update: req.body });
    Cast.findByIdAndUpdate(req.params.castMemberId, req.body, { new: true })
        .then((updatedCastMember) => {
            Movie.find({ _id: { $in: movies } })
                .then(async (moviesArray) => {
                    console.log({ moviesArray });

                    // loop through each movie in the array ov movies that belongs to the cast member and add the castMembers array from the movie.
                    await moviesArray
                        .forEach(async (movie) => {
                            if (
                                !movie.castMembers.includes(
                                    req.params.castMemberId
                                )
                            ) {
                                // save the movie info in the database once the cast member id has been added the list of castMembers in the movie
                                movie.castMembers.push(req.params.castMemberId);
                                await movie.save();
                            }
                        })
                        .then((updatedMovies) => {
                            console.log({ updatedMovies });
                            res.redirect(
                                `/casts/details/${updatedCastMember._id}`
                            );
                        })
                        .catch((err) =>
                            console.log(
                                `Error adding cast member id to movies: ${err}`
                            )
                        );
                })
                .catch((err) =>
                    console.log(
                        `Error getting movies from cast member array: ${err}`
                    )
                );
        })
        .catch((err) => console.log(`Error updating cast member: ${err}`));
});

/* POST remove movie from casts member list */
router.post("/remove-movie/:castMemberId/:movieId", (req, res, next) => {
    Cast.findById(req.params.castMemberId)
        .then((castMember) => {
            castMember.movies.pull(req.params.movieId);
            castMember
                .save()
                .then((updatedCastMember) => {
                    res.redirect(`/casts/details/${updatedCastMember._id}`);
                })
                .catch((err) =>
                    console.log(`Error removing movie from cast member: ${err}`)
                );
        })
        .catch((err) =>
            console.log(`Error Finding Cast Member To Remove Movie: ${err}`)
        );
});

/* POST delete the cast member from the database */
router.post("/delete/:castMemberId", (req, res, next) => {
    Cast.findByIdAndDelete(req.params.castMemberId)
        .then(() => {
            res.redirect("/casts");
        })
        .catch((err) =>
            console.log(`Error trying to delete cast member: ${err}`)
        );
});

module.exports = router;
