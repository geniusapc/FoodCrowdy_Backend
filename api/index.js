require('express-async-errors');
const multer = require('multer');
const router = require('express').Router();

const fileFilter = require('../utils/file/imageFilter');
const { storage } = require('../utils/image');
const upload = multer({ storage, fileFilter });

const getAllCoopProduct = require('./products/getAllCoopProduct');
const getCoopProduct = require('./products/getCoopProduct');
const addCoopProduct = require('./products/addCoopProduct');
const editCoopProduct = require('./products/editCoopProduct');
const deleteCoopProduct = require('./products/deleteCoopProduct');

const {
  valParamOId,
  valUploadCoopProduct,
  valEditCoopProduct,
} = require('../middleware/validation/cooperative');

router.use((req, res, next) => {
  req.user = {};
  next();
});

// router.use((req, res, next) => {
//   // req.user = { permission: 'admin' };
//   next();
// });

// PRODUCTS
router
  .route('/product/:productId')
  .all(valParamOId('productId'))
  .get(getCoopProduct)
  .delete(deleteCoopProduct)
  .patch(upload.single('image'), valEditCoopProduct, editCoopProduct);

router
  .route('/products/cooperative/:cooperativeId')
  .all(valParamOId('cooperativeId'))
  .get(getAllCoopProduct)
  .post(upload.single('image'), valUploadCoopProduct, addCoopProduct);

module.exports = router;
