const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Initialize app
const app = express();

// Connect to DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true }
);
requireDir('./src/models');


// Create first route
app.use('/api', require('./src/routes'));

app.listen(3001);