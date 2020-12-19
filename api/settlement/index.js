require('express-async-errors');
const multer = require('multer');
const router = require('express').Router();

const fileFilter = require('../../utils/file/imageFilter');
const { storage } = require('../../utils/image');
const constant = require('../../constants');

const getSettlement = require('./getSettlement');
const submitPaymentReceipt = require('./submitPaymentReceipt');
const changeSettlementStatus = require('./changeSettlementStatus');
const preInvoiceBalance = require('./currentBill');
const auth = require('../../middleware/auth');
const {
  valSettlementReceipt,
  valSettlementStatus,
} = require('../../middleware/validation/cooperative');

const { ADMIN, COOPERATIVE, SUPER, COOPADMIN } = constant;
const { loginAuth, checkRole, checkPermission } = auth;

const upload = multer({ storage, fileFilter });

// -> Settlement
router.get(
  '/',
  loginAuth,
  checkPermission(ADMIN, COOPERATIVE),
  checkRole(SUPER, COOPADMIN),
  getSettlement
);

router.post(
  '/receipt',
  loginAuth,
  checkPermission(COOPERATIVE),
  checkRole(COOPADMIN),
  upload.single('receipt'),
  valSettlementReceipt,
  submitPaymentReceipt
);

router.patch(
  '/status',
  loginAuth,
  checkPermission(ADMIN),
  checkRole(SUPER),
  valSettlementStatus,
  changeSettlementStatus
);

router.get(
  '/current-bill',
  loginAuth,
  checkPermission(ADMIN, COOPERATIVE),
  checkRole(SUPER, COOPADMIN),
  preInvoiceBalance
);

module.exports = router;
