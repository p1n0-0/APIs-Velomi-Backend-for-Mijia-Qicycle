// App file to APIs Velomi Backend

// Mode strict
'use strict';

// Dependencies
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const proxy = require('express-http-proxy');
const logger = require('morgan');

// Obtain proxy settings
const proxySettings = require('./settings').proxy;

// Instance Express
const app = express();

// Setup express
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Set static public content
app.use(express.static(path.join(__dirname, 'public')));

// Use bike router
app.use('/bike', require('./routes/bike'));

// If don't enter any route, send to the original server.
app.use('/', proxy(proxySettings.url, proxySettings.options));

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {

  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Set error code
  res.status(err.status || 500);

  // Render the error page
  res.json({message: err.message});

});

module.exports = app;
