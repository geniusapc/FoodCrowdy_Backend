/* eslint consistent-return:"off" */
const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports.valToken = (req, res, next) => {
  const { error, value } = Joi.object()
    .keys({
      token: Joi.string().trim().required(),
    })
    .validate(req.body);

  if (error) throw error;

  req.body = value;
  next();
};

module.exports.valEmail = (req, res, next) => {
  const { error, value } = Joi.object()
    .keys({
      email: Joi.string().email().required(),
    })
    .validate(req.body);

  if (error) throw error;

  req.body = value;
  next();
};

module.exports.valLogin = (req, res, next) => {
  const { error, value } = Joi.object()
    .keys({
      email: Joi.string().email().required(),
      password: Joi.string().required().min(8),
    })
    .validate(req.body);

  if (error) throw error;

  req.body = value;
  next();
};

module.exports.valSignup = (req, res, next) => {
  const { error, value } = Joi.object()
    .keys({
      token: Joi.string().required(),
      password: Joi.string().required().min(8),
      transactionPin: Joi.number().min(4).required(),
      phoneNumber: Joi.string().required(),
    })
    .validate(req.body);

  if (error) throw error;

  req.body = value;
  next();
};
module.exports.valThirdPartyAuth = (req, res, next) => {
  const { error, value } = Joi.object()
    .keys({
      cooperativeId: Joi.objectId().required(),
      name: Joi.string().required(),
      email: Joi.string().email().lowercase().trim().min(6).required(),
    })
    .validate(req.body);

  if (error) throw error;

  req.body = value;
  next();
};
