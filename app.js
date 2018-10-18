const express = require('express');
const path = require('path');
const app = express();

// View Engine
app.set('view engine', 'ejs');
app.set('views',  path.join(__dirname, 'views'));

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

// Global Vars
/* app.use(function(req, res, next) {
    res.locals.errors = null;
    next();
}); */

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(3000, function() {
    console.log('Server started on port 3000...');
})
