const router = require('express').Router();
require('express-async-errors');

const {
  valEmail,
  valSignup,
  valLogin,
  valChangePassword,
  valThirdPartyAuth,
} = require('../../middleware/validation/auth');

const signin = require('./signin');
const signup = require('./signup');
const sendEmailVerification = require('./sendVerificationEmail');
const forgottenPassword = require('./forgottenPassword');
const changePassword = require('./changePassword');
const userIsVerified = require('./userIsVerified');
const signinWithCoopAcct = require('./signinWithCoopAcct');

router.post('/login', valLogin, signin);
router.post('/signup', valSignup, signup);
router.post('/signin-with-coop-account', valThirdPartyAuth, signinWithCoopAcct);
router.post('/send-email-verification', valEmail, sendEmailVerification);
router.post('/forgotten-password', valEmail, forgottenPassword);
router.post('/change-password', valChangePassword, changePassword);
router.get('/check-account-verification', userIsVerified);

module.exports = router;
