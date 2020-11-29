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

const myOrders = require('./purchase/myPurchase');
const getAllOrders = require('./purchase/getAllOrders');
const checkout = require('./purchase/checkout');

const {
  valParamOId,
  valUploadCoopProduct,
  valEditCoopProduct,
  valCheckout,
} = require('../middleware/validation/cooperative');

const { loginAuth } = require('../middleware/auth');

router.use((req, res, next) => {
  req.user = { id: '5f292f63943ede289e04c75e' };
  next();
});

// PRODUCTS
router
  .route('/product/:productId')
  .all(valParamOId('productId'))
  .get(getCoopProduct)
  .delete(loginAuth, deleteCoopProduct)
  .patch(
    loginAuth,
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
    upload.single('image'),
    valUploadCoopProduct,
    addCoopProduct
  );

//  PURCHASE
router.get('/purchase/my-orders', myOrders); // must be logged in
router.get('/purchase', getAllOrders); // admin and coop_admin
router.post('/purchase/checkout', valCheckout, checkout); // any

//  router.post(
//   '/purchase/payment-verification',
//   adminCheckCoopId,
//   valPayment,
//   paymentVerification
// );

// router.get('/purchase/payment/status', paymentStatus);

module.exports = router;
