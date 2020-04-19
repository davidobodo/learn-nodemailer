const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');

//initialize app variable
const app = express();


//view engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//create a route - this is just for index page
app.get('/', (req, res) => {
    //wht this route sends
    res.send("Hello")
})

app.listen(5000, () => console.log('Server started...'))