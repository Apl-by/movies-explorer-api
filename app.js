const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const router = require('./routes/index');
const handleErrors = require('./middlewares/handlerErrors');
const { PORT, MONGO_URL, mongooseOptions } = require('./config/config');

const app = express();
mongoose.connect(MONGO_URL, mongooseOptions);

app.use(express.json());
app.use(cookieParser());

app.use('/', router);
app.use(handleErrors);

app.listen(PORT, console.log({ 404: 1 }));
