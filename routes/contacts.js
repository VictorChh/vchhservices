let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


//Connect with our Book Model
let contact = require('../models/contactl');


/* Get Route for the Book list page - READ operation*/
router.get('/', (req, res, next) => {
    contact.find((err, listc) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            console.log(listc);
            res.render('contactlist', {title: 'Contact list', contactlist: listc})
        }
    });

});

module.exports = router;