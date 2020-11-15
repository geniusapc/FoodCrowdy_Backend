const cloudinary = require('../../config/cloudinary');
const Cooperative = require('../../models/CoopProducts');
const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const { cooperativeId } = req.user;

  if (req.file) {
    const { secure_url: image } = await cloudinary.v2.uploader
      .upload(req.file.path, {
        folder: '/cooperative_products/',
      })
      .catch((err) => {
        throw err.error;
      });
    req.body.image = image;
  }
  await Cooperative.create({ ...req.body, cooperativeId });

  const message = 'Product uplaoded successfully';
  return response(res, next, 200, null, message);
};
