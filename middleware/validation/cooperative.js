/* eslint consistent-return:"off" */
const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports.valParamOId = (...params) => {
  return (req, res, next) => {
    const schema = {};
    const payload = {};

    for (let i = 0; i < params.length; i++) {
      schema[params[i]] = Joi.objectId().required();
      payload[params[i]] = req.params[params[i]];
    }

    const { error } = Joi.object().keys(schema).validate(payload);
    if (error) throw error;
    next();
  };
};

module.exports.valUploadCoopProduct = (req, res, next) => {
  const { error, value } = Joi.object()
    .keys({
      title: Joi.string().trim().required(),
      category: Joi.string().trim().required(),
      state: Joi.string().trim().required(),
      price: Joi.string().trim().required(),
      description: Joi.string().trim().required(),
      unit: Joi.string().trim().required(),
      quantity: Joi.string().trim().required(),
      landingCost: Joi.number().required(),
      baseProfit: Joi.number().required(),
      coopPercentProfit: Joi.number().required(),
    })
    .validate(req.body);

  if (error) throw error;

  req.body = value;
  next();
};
module.exports.valEditCoopProduct = (req, res, next) => {
  const { error, value } = Joi.object()
    .keys({
      title: Joi.string().trim(),
      category: Joi.string().trim(),
      state: Joi.string().trim(),
      price: Joi.number(),
      description: Joi.string().trim(),
      unit: Joi.string().trim(),
      quantity: Joi.number(),
      landingCost: Joi.number(),
      baseProfit: Joi.number(),
      coopPercentProfit: Joi.number(),
    })
    .validate(req.body);

  if (error) throw error;
  Object.keys(value).forEach((key) => !value[key] && delete value[key]);
  req.body = value;
  next();
};
