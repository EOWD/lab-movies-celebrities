const router = require("express").Router();
const Movie = require("../models/movie.model");
const Celebrity = require("../models/Celebrity.model");

router.get("/movies/create", (req, res) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render("movies/new-movie", { celebrities });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/movies/create", (req, res) => {
  const movie = req.body;
  Movie.create(movie)
    .then(() => {
      res.redirect("/movies");
    })
    .catch((error) => {
      res.redirect("/movies/create");
    });
});

router.get("/movies", (req, res) => {
  Movie.find()
    .then((movie) => {
      res.render("movies/movies", { movie });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
