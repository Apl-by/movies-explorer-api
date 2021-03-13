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

module.exports = {
  PORT, JWT_SECRET, COOKIE_NAME, MONGO_URL, mongooseOptions, tokenConfig, cookieConfig,
};
