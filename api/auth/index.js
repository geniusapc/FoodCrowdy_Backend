const router = require('express').Router();
require('express-async-errors');

const {
  valEmail,
  valSignup,
  valLogin,
} = require('../../middleware/validation/auth');

const signin = require('./signin');
const signup = require('./signup');
const sendEmailVerification = require('./sendVerificationEmail');
const forgottenPassword = require('./forgottenPassword');
const userIsVerified = require('./userIsVerified');

router.post('/login', valLogin, signin);
router.post('/signup', valSignup, signup);
router.post('/send-email-verification', valEmail, sendEmailVerification);
router.post('/forgotten-password', forgottenPassword);
router.get('/check-account-verification', userIsVerified);

module.exports = router;
