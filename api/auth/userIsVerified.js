const User = require('../../models/User');

module.exports = async (req, res) => {
  const response = { isVerified: false };
  const user = await User.findOne({ email: req.body.email });

  if (user && user.isVerified) {
    response.isVerified = true;
  }

  return res.send(response);
};
