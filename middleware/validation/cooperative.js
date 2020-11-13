/* eslint consistent-return:"off" */
const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

const { errorResponse } = require('../../utils/response');

const productFields = () => ({
  title: Joi.string().trim().required(),
  category: Joi.string().trim().required(),
  price: Joi.string().trim().required(),
  description: Joi.string().trim().required(),
  unit: Joi.string().trim().required(),
  quantity: Joi.string().trim().required(),
  landingCost: Joi.number().required(),
  baseProfit: Joi.number().required(),
  coopPercentProfit: Joi.number().required(),
});

module.exports.valUploadCoopProduct = (req, res, next) => {
  const { error, value } = Joi.object()
    .keys({
      ...productFields(),
    })
    .validate(req.body);

  if (error) return errorResponse(res, 422, error.details[0].message);

  req.body = value;
  next();
};

module.exports.valEditCoopProduct = (req, res, next) => {
  const { error, value } = Joi.object()
    .keys({
      id: Joi.objectId().required(),
      visibility: Joi.number().required(),
      ...productFields(),
    })
    .validate(req.body);

  if (error) return errorResponse(res, 422, error.details[0].message);

  req.body = value;
  next();
};

module.exports.valCheckout = (req, res, next) => {
  const { error, value } = Joi.object()
    .keys({
      user: Joi.object().keys({
        id: Joi.string().trim().required(),
        name: Joi.string().trim().required(),
        email: Joi.string().trim().required(),
      }),

      products: Joi.array()
        .items(
          Joi.object({
            id: Joi.objectId().required(),
            qty: Joi.number().integer().min(1).required(),
          })
        )
        .required(),

      delivery: Joi.object().keys({
        price: Joi.number().required(),
        address: Joi.string().trim().required(),
        state: Joi.string().trim().required(),
        phoneNumber: Joi.string().trim().required(),
      }),
    })
    .validate(req.body);

  if (error) return errorResponse(res, 422, error.details[0].message);

  req.body = value;
  next();
};

module.exports.valPayment = (req, res, next) => {
  const { error, value } = Joi.object()
    .keys({
      orderRef: Joi.string().trim().required(),
      amount: Joi.number().required(),
      status: Joi.string().valid('successful').trim().required(),
    })
    .validate(req.body);

  if (error) return errorResponse(res, 422, error.details[0].message);

  req.body = value;
  next();
};

module.exports.valAddGift = (req, res, next) => {
  const { error, value } = Joi.object()
    .keys({
      name: Joi.string().lowercase().trim().required(),
      cooperativeId: Joi.objectId().required(),
      qty: Joi.number().required(),
      tagName: Joi.string().required(),
    })
    .validate(req.body);

  if (error) return errorResponse(res, 422, error.details[0].message);

  req.body = value;
  next();
};

module.exports.valAddCooperative = (req, res, next) => {
  const { error, value } = Joi.object()
    .keys({
      name: Joi.string().lowercase().trim().required(),
      cooperativeId: Joi.string().required(),
      authUrl: Joi.string(),
      paymentVerificationUrl: Joi.string(),
      paymentUrl: Joi.string(),
    })
    .validate(req.body);

  if (error) return errorResponse(res, 422, error.details[0].message);

  req.body = value;
  next();
};
