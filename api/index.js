require('express-async-errors');
const multer = require('multer');
const router = require('express').Router();
const fileFilter = require('../utils/file/imageFilter');
const { storage } = require('../utils/image');

const upload = multer({ storage, fileFilter });

const addCoperatives = require('./cooperatives/addCooperatives');
const getAllCooperative = require('./cooperatives/getAllCooperative');
const addgift = require('./gift/addCoopGift');
const getGift = require('./gift/getCoopGift');
const getClaimedGift = require('./gift/getClaimedGift');
const claimGift = require('./gift/claimGift');
const getAllCoopProduct = require('./products/getAllCoopProduct');
const getCoopProduct = require('./products/getCoopProduct');
const addCoopProduct = require('./products/addCoopProduct');
const editCoopProduct = require('./products/editCoopProduct');

const checkout = require('./purchase/checkout');
const paymentVerification = require('./purchase/paymentVerification');
const getUserPurchase = require('./purchase/getUserPurchase');
const flutterwaveWebhook = require('./purchase/flutterwaveWebhook');
const paymentStatus = require('./purchase/paymentStatus');
const {
    auth,
    adminPrevillege,
    adminCheckCoopId,
} = require('../middleware/auth');

const {
    valAddCoop,
    valUploadCoopProduct,
    valGetProduct,
    valCheckout,
    valPayment,
    valEditCoopProduct,
    valGetGift,
    valAddGift,
} = require('../middleware/validation/cooperative');

// routes doesnt needs authentication
router.post('/purchase/flutter-payment', flutterwaveWebhook);

router.use(auth);

router
    .route('/')
    .get(adminPrevillege, getAllCooperative)
    .post(adminPrevillege, upload.single('logo'), valAddCoop, addCoperatives);

router.post('/purchase/checkout', adminCheckCoopId, valCheckout, checkout);
router.post(
    '/purchase/payment-verification',
    adminCheckCoopId,
    valPayment,
    paymentVerification
);
router.get('/purchase', adminCheckCoopId, getUserPurchase);
router.get('/purchase/payment/status', paymentStatus);

router
    .route('/gift')
    .get(adminPrevillege, adminCheckCoopId, valGetGift, getGift)
    .post(
        adminPrevillege,
        adminCheckCoopId,
        upload.single('image'),
        valAddGift,
        addgift
    );
router
    .route('/gift/claim')
    .get(adminCheckCoopId, adminPrevillege, getClaimedGift)
    .post(adminCheckCoopId, adminPrevillege, claimGift);

router
    .route('/products')
    .get(valGetProduct, adminCheckCoopId, getAllCoopProduct)
    .post(
        adminPrevillege,
        adminCheckCoopId,
        upload.single('image'),
        valUploadCoopProduct,
        addCoopProduct
    )
    .patch(
        adminPrevillege,
        upload.single('image'),
        valEditCoopProduct,
        editCoopProduct
    );

router.get('/products/:productId', adminCheckCoopId, getCoopProduct);

module.exports = router;