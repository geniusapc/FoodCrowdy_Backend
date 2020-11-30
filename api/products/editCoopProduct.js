const cloudinary = require('../../config/cloudinary');
const CoopProducts = require('../../models/CoopProducts');
const { getPublicId } = require('../../utils/image');
const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const { productId } = req.params;
  const product = await CoopProducts.findOne({ _id: productId }).select([
    'image',
  ]);

  if (!product) throw new Error('Invalid cooperative product');

  if (req.file && product.image) {
    const publicId = getPublicId(product.image);

    const { secure_url: image } = await cloudinary.v2.uploader
      .upload(req.file.path, { public_id: publicId })
      .catch((err) => {
        throw err.error;
      });
    req.body.image = image;
  }

  await CoopProducts.updateOne({ _id: productId }, { ...req.body });
  const message = 'Product edited successfully';
  return response(res, next, 200, null, message);
};
