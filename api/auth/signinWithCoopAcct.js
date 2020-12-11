const _ = require('lodash');
const { v4: uuidv4 } = require('uuid');
const User = require('../../models/User');
const generateUniqueId = require('../../utils/randomCode/userUniqueCode');

module.exports = async (req, res) => {
  const { name, email, phoneNumber, cooperativeId, staffId } = req.body;

  let user = await User.findOne({ email });

  if (user) {
    const obj = {};

    if (!user.permission || !user.permission === 'cooperative')
      obj.permission = 'cooperative';
    if (!user.isVerified) obj.isVerified = 'true';
    if (!user.staffId) obj.staffId = staffId;
    if (!user.cooperativeId) obj.cooperativeId = cooperativeId;

    if (Object.keys(obj).length) {
      user = await User.findByIdAndUpdate({ _id: user._id }, obj, {
        new: true,
      });
    }

    const token = await user.authToken();
    return res.header({ 'x-auth-token': token }).send({
      status: 'success',
      message: 'login successful',
      data: user,
    });
  }

  const uniqueId = await generateUniqueId();

  let newUser = await User.create({
    name,
    email,
    phoneNumber,
    cooperativeId,
    isVerified: true,
    password: uuidv4(),
    uniqueId,
    permission: 'cooperative',
    staffId,
  });

  const jwtToken = await newUser.authToken();
  newUser = _.omit(newUser.toObject(), ['password']);

  return res.header({ 'x-auth-token': jwtToken }).send({
    status: 'success',
    message: 'Registration successful',
    data: newUser,
  });
};
