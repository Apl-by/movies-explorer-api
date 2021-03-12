const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');
const { PORT, MONGO_URL, mongooseOptions } = require('./config/config');

const app = express();
mongoose.connect(MONGO_URL, mongooseOptions);

app.use(express.json());

app.post('/signup', (req, res) => res.send('ok signup '));
app.post('/signin', (req, res) => res.send('ok signin'));
app.post('/signout', (req, res) => res.send('ok signout'));
app.use('/', router);

app.listen(PORT, console.log(1));
