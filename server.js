const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var session = require('express-session');

var handlers = require('./handlers.js')
var Book = require('./models/book');


//middleware
app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bookstore');
var db = mongoose.connection;



app.get('/api/books',handlers.handelBook.showbook);
app.post('/api/books',handlers.handelBook.addbook);

app.post('/api/update',handlers.handelBook.updatebook);

app.post('/api/users/signup', handlers.handleUsers.signup);
app.post('/api/users/signin', handlers.handleUsers.signin);
app.get('/api/users', handlers.handleUsers.getUsers);
//app.get('/api/users/:user', );


app.listen(process.env.PORT || 3000);
console.log('Running on port 3000...');

module.exports = app;