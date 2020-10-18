let mongoose = require('mongoose');

//create a model class
let bookModel = mongoose.Schema({
    contact_name: String,
    contact_number: String,
    email: String
},
{
    Collection: "contactlist"
});

module.exports = mongoose.model("book", bookModel);