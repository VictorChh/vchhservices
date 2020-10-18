let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


//Connect with our Book Model
let book = require('../models/book');


/* Get Route for the Book list page - READ operation*/
router.get('/', (req, res, next) => {
    book.find((err, Booklist) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            console.log(Booklist);
            res.render('book', {title: 'Contact list', BookList: Booklist})
        }
    });

});

module.exports = router;