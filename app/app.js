const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');
const path = require('path');

// init database
require('./db/mongoose');

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/../views'));

// set layout
app.use(ejsLayouts);
app.set('layout', './layouts/main');

// public folder
app.use(express.static('public'));

// body parser
app.use('/', express.urlencoded({extended: true}))

// middleware
app.use('/', require('./middleware/view-variables'))

// routes
app.use(require('./routes/web.js'))

module.exports = app;
