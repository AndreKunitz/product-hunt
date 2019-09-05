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

const Product = mongoose.model('Product');

// Create first route
app.get('/', (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'Build native apps with  react',
        url: 'https://github.com/facebook/react-native'
    });
    
    return res.send('Hello World!');
})

app.listen(3001);