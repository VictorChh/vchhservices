let mongoose = require('mongoose');

//create a model class
let contactModel = mongoose.Schema({
    name: String,
    contactnumber: String,
    email: String
},
{
    Collection: "contacts"
});

module.exports = mongoose.model("contact", contactModel);