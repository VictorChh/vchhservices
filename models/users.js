let mongoose = require('mongoose');

//create a model class
let userModel = mongoose.Schema({
    name: String,
    password: String,
    email: String,
},
{
    Collection: "users"
});

module.exports = mongoose.model("user", userModel);