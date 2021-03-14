const rateLimit = require('express-rate-limit');
const limiterConfig = require('../config/config');

const limiter = rateLimit(limiterConfig);

module.exports = limiter;
