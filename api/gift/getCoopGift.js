const CooperativeGift = require('../../models/CooperativeGift');

module.exports = async (req, res) => {
  const cooperatives = await CooperativeGift.find({});
  return res.send(cooperatives);
};
