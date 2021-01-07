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
  if (req.body.cooperativeId) {
    try {
      req.body.cooperativeId = JSON.parse(req.body.cooperativeId);
    } catch {
      req.body.cooperativeId = [];
    }
  }

  const { error, value } = Joi.object()
    .keys({
      cooperativeId: Joi.array().items(Joi.objectId().required()).required(),
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
  if (req.body.cooperativeId) {
    try {
      req.body.cooperativeId = JSON.parse(req.body.cooperativeId);
    } catch (error) {
      req.body.cooperativeId = [];
    }
  }
  const { error, value } = Joi.object()
    .keys({
      cooperativeId: Joi.array().items(Joi.objectId()).allow(''),
      title: Joi.string().trim().allow(''),
      category: Joi.string().trim().allow(''),
      state: Joi.string().trim().allow(''),
      price: Joi.number().allow(''),
      description: Joi.string().trim().allow(''),
      visibility: Joi.string().trim().allow(''),
      unit: Joi.string().trim().allow(''),
      quantity: Joi.number().allow(''),
      landingCost: Joi.number().allow(''),
      baseProfit: Joi.number().allow(''),
      coopPercentProfit: Joi.number().allow(''),
    })
    .validate(req.body);

  if (error) throw error;
  Object.keys(value).forEach((key) => {
    const val =
      key !== 'quantity' && !value[key] ? delete value[key] : value[key];
    return val;
  });
  if (!Object.keys(value).length)
    throw new Error('you must specify atleast one field');
  req.body = value;
  next();
};

module.exports.valCheckout = (req, res, next) => {
  const { error, value } = Joi.object()
    .keys({
      user: Joi.object().keys({
        id: Joi.objectId().trim().required(),
        name: Joi.string().trim().required(),
        email: Joi.string().trim().required(),
        phoneNumber: Joi.string().trim().required(),
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
        type: Joi.string().valid('pickup', 'door delivery').required(),
        price: Joi.number().required(),
        address: Joi.string().trim().required(),
        state: Joi.string().trim().required(),
      }),
    })
    .validate(req.body);

  if (error) throw error;

  req.body = value;
  next();
};

module.exports.valPayment = (req, res, next) => {
  const { error, value } = Joi.object()
    .keys({
      orderRef: Joi.string().trim().required(),
      amount: Joi.number().required(),
      status: Joi.string().valid('successful').trim(),
      transactionPin: Joi.number().min(4),
      paymentType: Joi.string()
        .trim()
        .valid('fcWallet', 'coopWallet')
        .required(),
    })
    .validate(req.body);

  if (error) throw error;

  req.body = value;
  next();
};
module.exports.valPayWithWallet = (req, res, next) => {
  const { error, value } = Joi.object()
    .keys({
      orderRef: Joi.string().trim().required(),
      transactionPin: Joi.number().min(4).required(),
    })
    .validate(req.body);

  if (error) throw error;

  req.body = value;
  next();
};

//  USERS
module.exports.valEditUser = (req, res, next) => {
  const { error, value } = Joi.object()
    .keys({
      wallet: Joi.object().keys({
        balance: Joi.number(),
        status: Joi.string().valid('enabled', 'disabled'),
      }),
      accountStatus: Joi.string().valid('active', 'suspended'),
      permission: Joi.string().valid('admin', 'user', 'cooperative'),
      roles: Joi.array().items(
        Joi.valid('product', 'customer_care', 'coop_admin', 'logistics')
      ),
    })
    .validate(req.body);

  if (error) throw error;
  Object.keys(value).forEach((key) => !value[key] && delete value[key]);
  if (!Object.keys(value).length)
    throw new Error('you must specify atleast one field');

  if (value.wallet) {
    Object.keys(value.wallet).forEach(
      (key) => !value.wallet[key] && delete value.wallet[key]
    );
  }

  req.body = value;
  next();
};

module.exports.valChangePin = (req, res, next) => {
  const { error, value } = Joi.object()
    .keys({
      password: Joi.string().required(),
      transactionPin: Joi.string().required(),
    })
    .validate(req.body);

  if (error) throw error;

  req.body = value;
  next();
};

//  -> SETTLEMENT

module.exports.valSettlementReceipt = (req, res, next) => {
  const { error, value } = Joi.object()
    .keys({
      settlementId: Joi.objectId().required(),
    })
    .validate(req.body);

  if (error) throw error;

  req.body = value;
  next();
};

module.exports.valSettlementStatus = (req, res, next) => {
  const { error, value } = Joi.object()
    .keys({
      settlementId: Joi.objectId().required(),
      status: Joi.string().valid('paid', 'declined').required(),
    })
    .validate(req.body);

  if (error) throw error;

  req.body = value;
  next();
};
