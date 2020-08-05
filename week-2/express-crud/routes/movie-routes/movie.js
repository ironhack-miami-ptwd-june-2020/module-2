const express = require("express");
const router = express.Router();
const Movie = require("../../models/movie");

/* GET movies page */
router.get("/", (req, res, next) => {
    Movie.find()
        .then((movies) => {
            // console.log({ movies });
            res.render("movie-views/movies", { movies });
        })
        .catch((err) => console.log(`Error Finding Movies: ${err}`));
});

/* GET create movie page */
router.get("/create", (req, res, next) => {
    res.render("movie-views/createMovie");
});

/* POST create movie page */
router.post("/create", (req, res, next) => {
    // console.log({ body: req.body });
    Movie.create(req.body)
        .then((createdMovie) => {
            res.render("movie-views/movieDetails", { movie: createdMovie });
        })
        .catch((err) => console.log(`Error creating movie: ${err}`));
});

/* GET movie details page */
router.get("/details/:movieId", (req, res, next) => {
    Movie.findById(req.params.movieId)
        .populate("castMembers")
        .then((movieFromDb) => {
            res.render("movie-views/movieDetails", { movie: movieFromDb });
        })
        .catch((err) => console.log(`Error getting details for movie: ${err}`));
});

/* POST movies update page */
router.post("/update/:movieId", (req, res, next) => {
    Movie.findByIdAndUpdate(req.params.movieId, req.body, { new: true })
        .then((updatedMovie) => {
            // console.log({ updatedMovie });

            // use redirect('back') to redirect to the page you were just on
            res.redirect("back");
        })
        .catch((err) => console.log(`Error updating movie: ${err}`));
});

/* POST delete movie */
router.post("/delete/:movieId", (req, res, next) => {
    Movie.findByIdAndDelete(req.params.movieId)
        .then(() => {
            res.redirect("/movies");
        })
        .catch((err) => console.log(`Error deleting movie: ${err}`));
});

module.exports = router;
