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
router.get('/movies/:id', (req, res) => {
    const movieId = req.params.id;
  
    Movie.findById(movieId)
      .populate('cast') 
      .then((movie) => {
        res.render('movies/movie-details', { movie });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Error retrieving movie details');
      });
  });
  router.post("/movies/:id/delete",(req,res)=>{
    const movieID=req.params.id;

    Movie
    .findByIdAndDelete(movieID)
    .then(()=>{
        res.redirect('/movies')
    }).catch((error)=>{
        res.send('error')
    })
  })

module.exports = router;
