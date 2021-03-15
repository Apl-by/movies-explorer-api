const { COOKIE_NAME } = require('../config/config');

const deleteCookie = (req, res) => {
  res.clearCookie(COOKIE_NAME).end();
};

module.exports = deleteCookie;
