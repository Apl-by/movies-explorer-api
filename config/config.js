const {
  PORT = 3000,
  JWT_SECRET = 'devSecret',
  MONGO_URL = 'mongodb://localhost:27017/bitfilmsdb',
} = process.env;

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

module.exports = {
  PORT, JWT_SECRET, MONGO_URL, mongooseOptions,
};
