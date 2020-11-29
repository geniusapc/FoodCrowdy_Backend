const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/keys');

/* eslint consistent-return: "off" */
module.exports.loginAuth = (req, res, next) => {
  const token = req.header('x-auth-token');
  const error = new Error();

  if (!token) {
    error.status = 401;
    error.message = 'Access denied. no token provided';
    error.type = 'NO_TOKEN';
    throw error;
  }

  try {
    const decoded = jwt.verify(token, JWT_KEY);

    req.user = decoded;
  } catch (e) {
    error.status = 401;
    error.message = 'Invalid token';
    error.type = 'INVALID_TOKEN';
    throw error;
  }
  next();
};
