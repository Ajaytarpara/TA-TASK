const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const httpStatus = require('http-status');
const { jwtStrategy } = require('./config/passport');
const routes = require('./routes/v1');
const ApiError = require('./utils/ApiError');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options('*', cors());

// serve public files
app.use(express.static('public'));

// jwt authentication
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);


// v1 api routes
app.use('/', routes);



// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});


  module.exports = app;



