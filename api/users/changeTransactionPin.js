const User = require('../../models/User');

module.exports = async (req, res) => {
  const { transactionPin, password } = req.body;
  const { id } = req.user;

  const validUser = await User.findById(id);
  if (!validUser) throw new Error('Invalid user');

  const user = await validUser.comparePassword(password);
  if (!user) throw new Error('Incorrect password');

  await User.updateOne({ _id: id }, { transactionPin });

  return res.send({
    status: 'success',
    message: 'Transaction pin updated successfully',
  });
};
