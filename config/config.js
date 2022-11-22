const {
  PORT = 3000,
  JWT_SECRET = 'devSecret',
  MONGO_URL = 'mongodb://localhost:27017/bitfilmsdb',
} = process.env;

const COOKIE_NAME = 'jwt';

const cookieConfig = {
  maxAge: 3600000 * 24 * 7,
  httpOnly: true,
  sameSite: true,
};

const tokenConfig = {
  expiresIn: '7d',
};

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

const allowedCors = [
  'http://diploma.apl-by.ru',
  'https://diploma.apl-by.ru',
  // 'http://localhost:3001',
  // 'http://localhost:3000',
];

const corsOptions = {
  origin: allowedCors,
  credentials: true,
  optionsSuccessStatus: 200,
  exposedHeaders: ['set-cookie'],
  maxAge: 86400,
};

const limiterConfig = {
  windowMs: 10 * 60 * 1000,
  max: 250,
};

module.exports = {
  PORT,
  JWT_SECRET,
  COOKIE_NAME,
  MONGO_URL,
  mongooseOptions,
  tokenConfig,
  cookieConfig,
  allowedCors,
  corsOptions,
  limiterConfig,
};
