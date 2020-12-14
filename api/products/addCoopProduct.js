const cloudinary = require('../../config/cloudinary');
const Cooperative = require('../../models/CoopProducts');
const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
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
  await Cooperative.create({ ...req.body });

  const message = 'Product uplaoded successfully';
  return response(res, next, 200, null, message);
};
