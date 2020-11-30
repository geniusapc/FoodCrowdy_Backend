const _ = require('lodash');
const { v4: uuidv4 } = require('uuid');
const User = require('../../models/User');
const generateUniqueId = require('../../utils/randomCode/userUniqueCode');

module.exports = async (req, res) => {
  const { name, email, phoneNumber, cooperativeId } = req.body;

  const user = await User.findOne({ email });

  if (user) {
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
  });

  const jwtToken = await newUser.authToken();
  newUser = _.omit(newUser.toObject(), ['password']);

  return res.header({ 'x-auth-token': jwtToken }).send({
    status: 'success',
    message: 'Registration successful',
    data: newUser,
  });
};
