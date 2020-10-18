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
            res.render('contacts/list', {title: 'Contact list', contactlist: listc})
        }
    });

});


// GET route for dislay the Add page - Create opperation
router.get('/add', (req, res, next) => {
    res.render('contacts/add', {title: 'Add Contact'})
});

// POST route for processing the Add page - Create opperation
router.post('/add', (req, res, next) => {
    let  newContact = contact({
        "name": req.body.name,
        "contactnumber": req.body.contactnumber,
        "email": req.body.email
    });

    contact.create(newContact, (err, contact) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh contact list
            res.redirect('/contactlist');        
        }

    });
});

// GET route for dislay the Update page - Update opperation
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    contact.findById(id, (err, contacttoEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('contacts/edit', {title: 'Edit contact', contact: contacttoEdit})
        }
    });
});

// POST route for processing the Update page - Update opperation
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id
    let updatedContact = contact({
        "_id": id,
        "name": req.body.name,
        "contactnumber": req.body.contactnumber,
        "email": req.body.email
    })

    contact.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh contact list
            res.redirect('/contactlist');
            console.log(id);
            console.log(updatedContact);        
        }
    })
});

// GET to perform deletion - Delete opperation
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;
    contact.remove({_id:id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh contact list
            res.redirect('/contactlist');        
        }
    })
});

module.exports = router;