require('express-async-errors');
const router = require('express').Router();

const myOrders = require('./myPurchase');
const getAllOrders = require('./getAllOrders');
const checkout = require('./checkout');
const paymentStatus = require('./paymentStatus');
const paymentVerification = require('./paymentVerification');
const paymentWithWallet = require('./payWithWallet');

const { ADMIN, COOPERATIVE, SUPER, COOPADMIN } = require('../../constants');

const {
  valCheckout,
  valPayment,
} = require('../../middleware/validation/cooperative');

const {
  loginAuth,
  checkRole,
  checkPermission,
} = require('../../middleware/auth');

//  PURCHASE
router.get('/purchase/my-orders', loginAuth, myOrders);
router.get(
  '/purchase',
  loginAuth,
  checkPermission(ADMIN, COOPERATIVE),
  checkRole(SUPER, COOPADMIN),
  getAllOrders
);

router.post('/purchase/checkout', loginAuth, valCheckout, checkout);
router.get('/purchase/payment-status/:orderRef', loginAuth, paymentStatus);
router.get('/purchase/pay-with-wallet', loginAuth, paymentWithWallet);
router.post(
  '/purchase/payment-verification',
  loginAuth,
  valPayment,
  paymentVerification
);

module.exports = router;
