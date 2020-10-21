let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let indexController = require('../controllers/index')

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

// GET route for dislay the Add page - Create opperation
router.get('/login', indexController.displayLoginPage);

// POST route for processing the Add page - Create opperation
router.post('/login', indexController.processLoginPage);

// GET route for dislay the Add page - Create opperation
router.get('/register', indexController.displayRegisterPage);

// POST route for processing the Add page - Create opperation
router.post('/register', indexController.processRegisterPage);

// GET to perform logout 
router.get('/logout', indexController.performLogout);


module.exports = router;