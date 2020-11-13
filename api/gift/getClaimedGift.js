const ClaimedCooperateGift = require('../../models/ClaimedCooperativeGift');

module.exports = async (req, res) => {
  const cooperatives = await ClaimedCooperateGift.find({});
  return res.send(cooperatives);
};
