const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const feedRoutes = require('./routes/feed');

// app.use(bodyParser.urlencoded()); for form type data
app.use(bodyParser.json());

app.use('/feed', feedRoutes);

app.listen(3000);


