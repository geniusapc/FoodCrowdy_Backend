/* eslint eqeqeq:"off", func-names:"off" */
const Settlement = require('../../models/Settlement');

const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const { cooperativeId, permission } = req.user;

  let condition = {};

  if (permission !== 'admin') condition = { cooperativeId };

  const settlement = await Settlement.find(condition);

  const message = 'Settlement retrived  successfully';
  return response(res, next, 200, settlement, message);
};
