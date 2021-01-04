const { v4: uuidv4 } = require('uuid');

const Invoice = require('../../models/Invoice');
const Payment = require('../../models/GatewayResponse');
const User = require('../../models/User');
const sendMail = require('../../utils/email/paymentReceipt');
const { purchaseAlert } = require('../../utils/sms/purchaseAlert');
const reduceProductQuantity = require('../../utils/product/reduceProductQuantity');
const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const { txRef, amount, transactionPin } = req.body;

  const invoice = await Invoice.findOne({ txRef }).lean();
  if (!invoice) throw new Error(`Order reference ${txRef} not found`);

  const result = await Payment.findOne({ txRef });
  if (result) throw new Error('Payment has been verified already');

  const payload = {
    txRef,
    flwRef: uuidv4(),
    amount,
    chargedAmount: amount,
    status: 'successful',
    paymentType: 'wallet',
    customer: {
      name: 'name',
      email: 'email',
    },
  };

  if (!transactionPin) throw new Error('Transaction Pin required');
  const user = await User.findById(invoice.user.id);
  if (!user) throw new Error('User does not exist');

  if (user.walletBalance < amount) throw new Error('Insufficient balance');

  const { walletBalance } = user;

  user.walletBalance = walletBalance - amount;
  await user.save();

  const paymentDetails = await Payment.create(payload);

  await Invoice.updateOne({ txRef }, { txIsValid: true });

  await purchaseAlert();
  await sendMail({ paymentDetails, invoice });
  await reduceProductQuantity({ invoice });

  const message = 'Payment verified  successfully';
  return response(res, next, 200, null, message);
};