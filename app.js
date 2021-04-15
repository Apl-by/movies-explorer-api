require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const router = require('./routes/index');
const corsHeader = require('./middlewares/corsHeader');
const handleErrors = require('./middlewares/handlerErrors');
const {
  PORT, MONGO_URL, mongooseOptions, corsOptions, limiterConfig,
} = require('./config/config');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();
mongoose.connect(MONGO_URL, mongooseOptions);

app.use(cors(corsOptions));
app.use(corsHeader);

app.use(requestLogger);

app.use(rateLimit(limiterConfig));
app.use(helmet());

app.use(express.json());
app.use(cookieParser());

app.use('/', router);

app.use(errorLogger);
app.use(handleErrors);

app.listen(PORT);
