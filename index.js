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
    var message="<a href='/projects'>Projects</a>";
    res.send(message);
});


app.get('/projects', function(req, res) 
{
    res.send('Estos son mis projectos Projects');
});


app.listen(app.get('port'));
console.log('Server running at http://localhost:3000/');module.exports = app