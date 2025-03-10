const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");


router.get('/celebrities/create', (req, res) => {
    res.render('celebrities/new-celebrity');
  });
  
  router.post('/celebrities/create', (req, res) => {
    const celeb = req.body;
  
    Celebrity.create(celeb)
      .then(() => {
        res.redirect('/celebrities'); 
      })
      .catch((error) => {
        res.render('celebrities/new-celebrity'); 
      });
  });
  router.get('/celebrities', (req, res) => {
    Celebrity.find()
      .then((celebrities) => {
        res.render('celebrities/celebrities', { celebrities });
      })
      .catch((error) => {
        console.log(error);
       
      });
  });
  
module.exports = router;
