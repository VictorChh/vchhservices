var express = require('express');
var app = express();

//Setings
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000)


//Routs
app.get('/', function(req, res) 
{
    res.render('index.ejs')
});

app.get('/about', function(req, res) 
{
    res.render('views/routes/about.ejs')
});

app.get('/projects', function(req, res) 
{
    res.render('/routes/projects.ejs')
});
app.get('/services', function(req, res) 
{
    res.render('/routes/contact.ejs')
});
app.get('/contact', function(req, res) 
{
    res.render('/routes/contact.ejs')
});


app.listen(app.get('port'));
console.log('Server running at http://localhost:3000/');module.exports = app