const multer = require('multer');

module.exports.storage = multer.diskStorage({
  filename(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

module.exports.getPublicId = (image) => {
  const publicId = image.split('/');
  const arrayLength = publicId.length;

  return `${publicId[arrayLength - 2]}/${
    publicId[arrayLength - 1].split('.')[0]
  }`;
};
