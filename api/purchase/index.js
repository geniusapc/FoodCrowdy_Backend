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
  valPayWithWallet,
} = require('../../middleware/validation/cooperative');

const {
  loginAuth,
  checkRole,
  checkPermission,
} = require('../../middleware/auth');

//  PURCHASE
router.get('/my-orders', loginAuth, myOrders);
router.get(
  '/',
  loginAuth,
  checkPermission(ADMIN, COOPERATIVE),
  checkRole(SUPER, COOPADMIN),
  getAllOrders
);

router.post('/checkout', loginAuth, valCheckout, checkout);
router.get('/payment-status/:orderRef', loginAuth, paymentStatus);
router.post('/pay-with-wallet', loginAuth, valPayWithWallet, paymentWithWallet);
router.post(
  '/payment-verification',
  loginAuth,
  valPayment,
  paymentVerification
);

module.exports = router;
