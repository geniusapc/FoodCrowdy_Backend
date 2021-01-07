require('express-async-errors');
const router = require('express').Router();

const { ADMIN, COOPERATIVE, SUPER, COOPADMIN } = require('../../constants');

const getAllUsers = require('./getAllUsers');
const registeredCoopMember = require('./registeredCoopMember');
const unRegisteredCoopMembers = require('./unRegisteredCoopMembers');
const editUser = require('./editUser');
const changeTransactionPin = require('./changeTransactionPin');

const {
  valEditUser,
  valParamOId,
  valChangePin,
} = require('../../middleware/validation/cooperative');

const {
  loginAuth,
  checkRole,
  checkPermission,
} = require('../../middleware/auth');

// Users
router.get(
  '/',
  loginAuth,
  checkPermission(ADMIN, COOPERATIVE),
  checkRole(SUPER, COOPADMIN),
  getAllUsers
);
router.get(
  '/registered-coop-members',
  loginAuth,
  checkPermission(ADMIN, COOPERATIVE),
  checkRole(SUPER, COOPADMIN),
  registeredCoopMember
);
router.get(
  '/unregistered-coop-members',
  loginAuth,
  checkPermission(ADMIN, COOPERATIVE),
  checkRole(SUPER, COOPADMIN),
  unRegisteredCoopMembers
);
router.patch(
  '/:userId',
  loginAuth,
  valParamOId('userId'),
  checkPermission(ADMIN, COOPERATIVE),
  checkRole(SUPER, COOPADMIN),
  valEditUser,
  editUser
);
router.post(
  '/change-transaction-pin',
  loginAuth,
  valChangePin,
  changeTransactionPin
);

module.exports = router;
