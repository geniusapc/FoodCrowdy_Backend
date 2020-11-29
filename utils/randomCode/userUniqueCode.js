const User = require('../../models/User');

const generateUniqueId = async () => {
  const allUsers = await User.find({}).sort({ createdAt: 1 });
  const arrayLength = allUsers.length;
  let uniqueId = 'FCUSR1001';

  if (arrayLength) {
    const lastUser = allUsers[arrayLength - 1];
    const uniqueIdNumber = parseInt(lastUser.uniqueId.slice(5), 10);
    uniqueId = `FCUSR${uniqueIdNumber + 1}`;
  }

  return uniqueId;
};

module.exports = generateUniqueId;
