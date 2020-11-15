const { v4: uuidv4 } = require('uuid');
const cloudinary = require('../../config/cloudinary');
const Cooperative = require('../../models/Cooperative');
const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  if (!req.file) throw new Error('Image is required');

  if (req.file) {
    const { secure_url: image } = await cloudinary.v2.uploader
      .upload(req.file.path, {
        folder: '/cooperative_logo/',
      })
      .catch((err) => {
        throw err.error;
      });

    req.body.logo = image;
  }
  const apiKey = uuidv4().replace(/-/g, '');

  await Cooperative.create({ ...req.body, apiKey });
  const message = 'Cooperative created successfully';
  return response(res, next, 200, null, message);
};
