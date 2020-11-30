const _ = require('lodash');
const User = require('../../models/User');
const UnregisteredCoopMember = require('../../models/UnregisteredCoopMember');
const Cache = require('../../models/Cache');

module.exports = async (req, res) => {
  const { password, phoneNumber, token, transactionPin } = req.body;

  const result = await Cache.findOne({ emailToken: token });
  if (!result) throw new Error('Invalid token');

  const user = await UnregisteredCoopMember.findById(result.userId);
  if (!user) throw Error('Invalid cooperative account');

  const userIsValid = await User.findOne({ email: user.email });
  if (userIsValid) throw Error('User already exist');

  const allUsers = await User.find({}).sort({ createdAt: 1 });
  const arrayLength = allUsers.length;
  let uniqueId = 'FCUSR1001';
  const lastUser = allUsers[arrayLength - 1];

  if (arrayLength && lastUser.uniqueId) {
    const uniqueIdNumber = parseInt(lastUser.uniqueId.slice(5), 10);
    uniqueId = `FCUSR${uniqueIdNumber + 1}`;
  }

  let newUser = await User.create({
    password,
    phoneNumber,
    transactionPin,
    uniqueId,
    isVerified: true,
    email: user.email,
    name: user.name,
    permission: 'cooperative',
    walletBalance: user.walletBalance,
    cooperativeId: user.cooperativeId,
  });

  await Cache.deleteOne({ emailToken: token });
  await UnregisteredCoopMember.findByIdAndDelete(result.userId);

  const jwtToken = await newUser.authToken();
  newUser = _.omit(newUser.toObject(), ['password']);

  return res.header({ 'x-auth-token': jwtToken }).send({
    status: 'success',
    message: 'login successful',
    data: newUser,
  });
};
