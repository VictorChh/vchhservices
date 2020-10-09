/* 
* Index js
* Created by Victor Chaparro
* Studen ID: 301140944
* Oct - 05 - 2020
* This js file manage all the different routes
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index');
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/* GET Products page. */
router.get('/services', function(req, res, next) {
  res.render('services');
});

/* GET Services page. */
router.get('/projects', function(req, res, next) {
  res.render('projects');
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

module.exports = router;
