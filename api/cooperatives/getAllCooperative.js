const Cooperative = require('../../models/Cooperative');
const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const cooperatives = await Cooperative.find({})
    .sort({ createdAt: -1 })
    .select(['-__v', '-updatedAt', '-apiKey']);
  return response(res, next, 200, cooperatives);
};
