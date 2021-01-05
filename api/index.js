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
  COOPERATIVE,
  SUPER,
  PRODUCT,
  COOPADMIN,
} = require('../constants');

// USERS
const registeredCoopMember = require('./users/registeredCoopMember');
const unRegisteredCoopMembers = require('./users/unRegisteredCoopMembers');
const editUser = require('./users/editUser');
const changeTransactionPin = require('./users/changeTransactionPin');

const {
  valParamOId,
  valUploadCoopProduct,
  valEditCoopProduct,
  valEditUser,
  valChangePin,
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

// Users
router.get(
  '/users/registered-coop-members',
  loginAuth,
  checkPermission(ADMIN, COOPERATIVE),
  checkRole(SUPER, COOPADMIN),
  registeredCoopMember
);
router.get(
  '/users/unregistered-coop-members',
  loginAuth,
  checkPermission(ADMIN, COOPERATIVE),
  checkRole(SUPER, COOPADMIN),
  unRegisteredCoopMembers
);
router.patch(
  '/user/:userId',
  loginAuth,
  checkPermission(ADMIN, COOPERATIVE),
  checkRole(SUPER, COOPADMIN),
  valEditUser,
  editUser
);
router.post(
  '/user/change-transaction-pin',
  loginAuth,
  valChangePin,
  changeTransactionPin
);

module.exports = router;
