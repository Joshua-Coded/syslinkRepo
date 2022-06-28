const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

// models Schemas
const Admin = require('./models/admin');
const {ifError} = require('assert');

// my database connection
mongoose.connect('mongodb://localhost:27107/syslink', {useNewUrlParser: true})
.then(() => {
    console.log("CONNECTION OPEN!!!");
})
.catch(err => {
    console.log("OHHH NOO ERROR!!")
    console.log(err)
});

// my views engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// my middlewares
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))

const roles = ['ace', 'personerlist', 'examiner','accountant'];

// my routes

//Route for logging in
app.get('/', (req, res) => {
res.render('pages/login');    
})

// Route for creating password
app.post('/admins/:id/change-password', (req, res) => {
    res.redirect('/admins/')
})


app.listen(3000, () => {
    console.log("Server Running on port 3000!");
});
