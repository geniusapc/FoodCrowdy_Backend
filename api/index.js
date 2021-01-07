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
  ADMIN,
  SUPER,
  PRODUCT,
} = require('../constants');

const {
  valParamOId,
  valUploadCoopProduct,
  valEditCoopProduct,
} = require('../middleware/validation/cooperative');

const { loginAuth, checkRole, checkPermission } = require('../middleware/auth');

// PRODUCTS
router
  .route('/products/cooperative/:cooperativeId')
  .get(loginAuth, valParamOId('cooperativeId'), getAllCoopProduct);

router
  .route('/products')
  .post(
    loginAuth,
    checkPermission(ADMIN),
    checkRole(SUPER, PRODUCT),
    upload.single('image'),
    valUploadCoopProduct,
    addCoopProduct
  );

router
  .route('/products/:productId')
  .all(loginAuth, valParamOId('productId'))
  .get(getCoopProduct)
  .delete(checkPermission(ADMIN), checkRole(SUPER), deleteCoopProduct)
  .patch(
    checkPermission(ADMIN),
    checkRole(SUPER, PRODUCT),
    upload.single('image'),
    valEditCoopProduct,
    editCoopProduct
  );



module.exports = router;
