var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var morgan = require('morgan'); 
var pres = require('./diagnosis');
var db = "mongodb://192.168.1.111:4000/SMK";
var app = express();

mongoose.connect(db,(err) => {
    if (err) {
      console.log('Could not connect to database');
    } else {
      console.log('Rock On');
    }
});

app.listen(process.env.PORT || 3000);
app.use(bodyParser.json({limit: '50mb'})); // augmenter limit du payload
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());
app.use(morgan('dev')); 
app.use('/doctors',pres);
app.use('/',require('./router'));
