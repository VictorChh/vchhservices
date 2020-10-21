let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

// helpler function gor guard purposes
function requireAut(req, res, next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login')
    }
    next();
}

let contactsController = require('../controllers/contacts')


/* Get Route for the Book list page - READ operation*/
router.get('/', contactsController.displayContactList);

/* Get Route for the Book list page - READ operation*/
router.get('/contactlist', contactsController.displayContactList);

// GET route for dislay the Add page - Create opperation
router.get('/add', requireAut, contactsController.displayAddPage);

// POST route for processing the Add page - Create opperation
router.post('/add', requireAut, contactsController.processAddPage);

// GET route for dislay the Update page - Update opperation
router.get('/edit/:id', requireAut, contactsController.displayEditPage);

// POST route for processing the Update page - Update opperation
router.post('/edit/:id', requireAut, contactsController.processEditPage);

// GET to perform deletion - Delete opperation
router.get('/delete/:id', requireAut, contactsController.processDeletePage);

module.exports = router;