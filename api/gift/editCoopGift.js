const cloudinary = require('../../config/cloudinary');
const CooperativeGift = require('../../models/CooperativeGift');
const { getPublicId } = require('../../utils/image');
const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const { cooperativeId } = req.user;

  const gift = await CooperativeGift.findOne({
    _id: req.body.id,
    cooperativeId,
  }).select({ image: 1 });

  if (gift && req.file) {
    const publicId = getPublicId(gift.image);

    const { secure_url: image } = await cloudinary.v2.uploader
      .upload(req.file.path, { public_id: publicId })
      .catch((err) => {
        throw err.error;
      });
    req.body.image = image;
  }

  await CooperativeGift.updateOne({ cooperativeId }, { ...req.body });

  const message = 'Gift edited successfully';
  return response(res, next, 200, null, message);
};
