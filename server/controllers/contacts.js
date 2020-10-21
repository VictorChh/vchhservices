let express = require('express');
let router = express.Router();

// create a reference to the model
let mongoose = require('mongoose');
//Connect with our Book Model
let contact = require('../models/contactl');


module.exports.displayContactList = (req, res, next) => {
    contact.find((err, listc) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            console.log(listc);
            res.render('contacts/list', {
            title: 'Contact list', 
            contactlist: listc, 
            displayName: req.user ? req.user.displayName : ''})
        }
    });

}

module.exports.displayAddPage = (req, res, next) => {
    res.render('contacts/add', {title: 'Add Contact', 
    displayName: req.user ? req.user.displayName : ''})
}

module.exports.processAddPage = (req, res, next) => {
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

    })
} 

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;
    
    contact.findById(id, (err, contacttoEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('contacts/edit', {
                title: 'Edit contact', 
                contact: contacttoEdit, 
                displayName: req.user ? req.user.displayName : ''})
        }
    });
}       

module.exports.processEditPage = (req, res, next) => {
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
}

module.exports.processDeletePage = (req, res, next) => {
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
}