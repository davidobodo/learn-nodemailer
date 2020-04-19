const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path')

//initialize app variable
const app = express();


//view engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//static folder
app.use('/public', express.static(path.join(__dirname, 'public')))


//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//create a route - this is just for index page
app.get('/', (req, res) => {
    //what this route sends
    res.render('contact')
})

app.post('/send', (req, res) => {
    console.log(req.body)
})

app.listen(5000, () => console.log('Server started...'))