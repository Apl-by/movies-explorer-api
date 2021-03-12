const express = require('express');
const mongoose = require('mongoose');
const { PORT, MONGO_URL, mongooseOptions } = require('./config/config');

const app = express();
mongoose.connect(MONGO_URL, mongooseOptions);

// app.use(express.json());

// app.use('/', router);

app.listen(PORT, console.log(1));
