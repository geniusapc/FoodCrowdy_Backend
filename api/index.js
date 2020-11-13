require('express-async-errors');
const multer = require('multer');
const router = require('express').Router();
const fileFilter = require('../utils/file/imageFilter');
const { storage } = require('../utils/image');

const upload = multer({ storage, fileFilter });

const addCoperatives = require('./addCooperatives');
const getAllCooperative = require('./getAllCooperative');
const addgift = require('./gift/addCoopGift');
const getGift = require('./gift/getCoopGift');
const getClaimedGift = require('./gift/getClaimedGift');
const getAllCoopProduct = require('./products/getAllCoopProduct');
const addCoopProduct = require('./products/addCoopProduct');
const editCoopProduct = require('./products/editCoopProduct');

const checkout = require('./purchase/checkout');
const paymentVerification = require('./purchase/paymentVerification');

const {
  valUploadCoopProduct,
  valCheckout,
  valPayment,
  valEditCoopProduct,
  valAddGift,
} = require('../middleware/validation/cooperative');

router.use((req, res, next) => {
  req.user = {
    cooperativeId: '5fad88ca0e725a2410bb6d8c',
    permission: 'admin',
  };
  next();
});

router
  .route('/')
  .get(getAllCooperative)
  .post(upload.single('image'), addCoperatives);

router.post('/purchase/checkout', valCheckout, checkout);
router.post('/purchase/payment-verification', valPayment, paymentVerification);

router
  .route('/gift')
  .get(getGift)
  .post(upload.single('image'), valAddGift, addgift);

router.get('/claimed-gift', getClaimedGift);

router
  .route('/products')
  .get(getAllCoopProduct)
  .post(upload.single('image'), valUploadCoopProduct, addCoopProduct)
  .patch(upload.single('image'), valEditCoopProduct, editCoopProduct);

module.exports = router;
