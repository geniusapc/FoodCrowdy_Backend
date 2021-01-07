const { v4: uuidv4 } = require('uuid');

const Invoice = require('../../models/Invoice');
const Payment = require('../../models/GatewayResponse');
const User = require('../../models/User');
const sendMail = require('../../utils/email/paymentReceipt');
// const { purchaseAlert } = require('../../utils/sms/purchaseAlert');
// const {
//   reduceProductQuantity,
// } = require('../../utils/product/reduceProductQuantity');
const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const { orderRef, transactionPin } = req.body;

  const invoice = await Invoice.findOne({ orderReference: orderRef }).lean();
  if (!invoice) throw new Error(`Order reference ${orderRef} not found`);
  const amount = invoice.totalPrice;

  const result = await Payment.findOne({ txRef: orderRef });
  
  if (result) throw new Error('Payment has been verified already');

  const payload = {
    txRef: orderRef,
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
  const user = await User.findById(invoice.userId);
  if (!user) throw new Error('User does not exist');

  const { wallet } = user;

  if (wallet.balance < amount) throw new Error('Insufficient balance');

  await User.updateOne(
    { _id: invoice.userId },
    { 'wallet.balance': wallet.balance - amount }
  );

  await Payment.create(payload);

  await Invoice.updateOne({ orderReference: orderRef }, { txIsValid: true });

  // await purchaseAlert(); // had issue sending message
  await sendMail({
    paymentDetails: { amount },
    invoice: { orderRef, user: { name: user.name, email: user.email } },
  });
  // await reduceProductQuantity({ invoice });

  const message = 'Payment verified  successfully';
  return response(res, next, 200, null, message);
};
