const ClaimedCooperateGift = require('../../../models/ClaimedCooperativeGift');

module.exports = async (req, res) => {
  const { cooperativeId } = req.user;
  const { userId } = req.query;

  const condition = {cooperativeId};
  
  // const condition = { cooperativeId, user };
  if (userId) {
    condition['user.id'] = userId;
  }



  const cooperatives = await ClaimedCooperateGift.find(condition);
  return res.send(cooperatives);
};
