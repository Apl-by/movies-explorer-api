const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');
const handleErrors = require('./middlewares/handlerErrors');
const { createUser } = require('./controllers/users');
const { PORT, MONGO_URL, mongooseOptions } = require('./config/config');

const app = express();
mongoose.connect(MONGO_URL, mongooseOptions);

app.use(express.json());

app.post('/signup', createUser);
app.post('/signin', (req, res) => res.send('ok signin'));
app.post('/signout', (req, res) => res.send('ok signout'));
app.use('/', router);
app.use(handleErrors);

app.listen(PORT, console.log(1));
