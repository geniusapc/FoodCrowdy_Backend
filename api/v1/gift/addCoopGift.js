const cloudinary = require('../../../config/cloudinary');
const CooperativeGift = require('../../../models/CooperativeGift');
const { response } = require('../../../utils/response');

module.exports = async (req, res, next) => {
  const { cooperativeId } = req.user;
  if (req.file) {
    const { secure_url: image } = await cloudinary.v2.uploader
      .upload(req.file.path, {
        folder: '/cooperative_gift/',
      })
      .catch((err) => {
        throw err.error;
      });
    req.body.image = image;
  }

  await CooperativeGift.create({ ...req.body, cooperativeId });

  const message = 'Gift uploaded successfully';
  return response(res, next, 200, null, message);
};
