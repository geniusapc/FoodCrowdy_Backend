const ClaimedCooperativeGift = require('../../../models/ClaimedCooperativeGift');
const CooperativeGift = require('../../../models/CooperativeGift');
const { response } = require('../../../utils/response');
const sendMail = require('../../../utils/email/coopClaimGift');

const generateCode = () => Math.floor(1000 + Math.random() * 9000);

module.exports = async (req, res, next) => {
  const { tagName, user } = req.body;
  const { cooperativeId } = req.user;

  const gift = await CooperativeGift.find({
    cooperativeId,
    tagName,
    visibility: 1,
  });
  if (!gift.length)
    throw new Error(
      'Gift does not exist or you do not have permission to claim this gift'
    );

  const claimedGift = await ClaimedCooperativeGift.find({
    'user.id': user.id,
    tagName,
  });

  if (claimedGift.length) throw new Error('You have already claimed this gift');

  const code = generateCode();

  await ClaimedCooperativeGift.create({
    cooperativeId,
    code,
    ...req.body,
  });

  await sendMail({ user, code });

  const message = 'Gift claimed successfully';
  return response(res, next, 200, null, message);
};
