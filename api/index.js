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

// PURCHASE
const myOrders = require('./purchase/myPurchase');
const getAllOrders = require('./purchase/getAllOrders');
const checkout = require('./purchase/checkout');
const paymentStatus = require('./purchase/paymentStatus');
const paymentVerification = require('./purchase/paymentVerification');

// USERS
const registeredCoopMember = require('./users/registeredCoopMember');
const unRegisteredCoopMembers = require('./users/unRegisteredCoopMembers');
const editUser = require('./users/editUser');

const {
  valParamOId,
  valUploadCoopProduct,
  valEditCoopProduct,
  valCheckout,
  valEditUser,
} = require('../middleware/validation/cooperative');

const { loginAuth, checkRole } = require('../middleware/auth');

// PRODUCTS
router
  .route('/product/:productId')
  .all(loginAuth, valParamOId('productId'))
  .get(getCoopProduct)
  .delete(checkRole('super'), loginAuth, deleteCoopProduct)
  .patch(
    checkRole('super', 'product'),
    upload.single('image'),
    valEditCoopProduct,
    editCoopProduct
  );
router
  .route('/products/cooperative/:cooperativeId')
  .all(loginAuth, valParamOId('cooperativeId'))
  .get(getAllCoopProduct)
  .post(
    loginAuth,
    checkRole('super', 'product'),
    upload.single('image'),
    valUploadCoopProduct,
    addCoopProduct
  );

//  PURCHASE
router.get('/purchase/my-orders', loginAuth, myOrders);
router.get(
  '/purchase',
  loginAuth,
  checkRole('admin', 'coop_admin'),
  getAllOrders
);
router.post('/purchase/checkout', loginAuth, valCheckout, checkout);
router.get('/purchase/payment/status', loginAuth, paymentStatus);
router.post('/purchase/payment-verification', loginAuth, paymentVerification);

// Users
router.get('/users/registered-coop-members', registeredCoopMember);
router.get('/users/unregistered-coop-members', unRegisteredCoopMembers);
router.patch('/user/:userId', valEditUser, editUser);

module.exports = router;
