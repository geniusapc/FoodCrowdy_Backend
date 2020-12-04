const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/keys');

const User = require('../models/User');

/* eslint consistent-return: "off" */
module.exports.loginAuth = async (req, res, next) => {
  const token = req.header('x-auth-token');
  const error = new Error();

  if (!token) {
    error.status = 400;
    error.message = 'Access denied. no token provided';
    error.type = 'NO_TOKEN';
    throw error;
  }

  try {
    const decoded = jwt.verify(token, JWT_KEY);

    const user = await User.findById(decoded._id).select([
      'roles',
      'cooperativeId',
      'permission',
    ]);

    if (!user) {
      error.status = 403;
      error.message = 'Account does not exist';
      error.type = 'INVALID_ACCOUNT';
      throw error;
    }

    req.user = user;
  } catch (e) {
    error.status = 401;
    error.message = 'Invalid token';
    error.type = 'INVALID_TOKEN';
    throw error;
  }
  next();
};

module.exports.checkPermission = (...permission) => {
  return async (req, res, next) => {
    const valid = permission.includes(req.user.permission);
    const error = new Error();

    if (!valid) {
      error.status = 403;
      error.message =
        '- Access denied. you dont have permission to perform this action';
      error.type = 'FORBIDDEN';
      throw error;
    }

    next();
  };
};

module.exports.checkRole = (...role) => {
  return async (req, res, next) => {
    const valid = [...role].some((r) => req.user.roles.includes(r));
    const error = new Error();

    if (!valid) {
      error.status = 403;
      error.message =
        'Access denied. you dont have permission to perform this action';
      error.type = 'FORBIDDEN';
      throw error;
    }

    next();
  };
};
