const cloudinary = require('../../config/cloudinary');
const CoopProducts = require('../../models/CoopProducts');
const { getPublicId } = require('../../utils/image');
const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const { cooperativeId } = req.user;
  const prod = await CoopProducts.findOne({
    cooperativeId,
    _id: req.body.id,
  }).select(['image']);

  if (!prod) throw new Error('Invalid cooperative product');

  if (req.file) {
    const publicId = getPublicId(prod.image);

    const { secure_url: image } = await cloudinary.v2.uploader
      .upload(req.file.path, { public_id: publicId })
      .catch((err) => {
        throw err.error;
      });
    req.body.image = image;
  }

  await CoopProducts.updateOne({ _id: req.body.id }, { ...req.body });
  const message = 'Product edited successfully';
  return response(res, next, 200, null, message);
};
