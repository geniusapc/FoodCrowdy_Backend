const { v4: uuidv4 } = require('uuid');
const Invoice = require('../../models/CoopInvoice');
const Payment = require('../../models/CooperativePayment');
const User = require('../../models/User');

const sendMail = require('../../utils/email/paymentReceipt');

const { purchaseAlert } = require('../../utils/sms/purchaseAlert');
const { response } = require('../../utils/response');
const reduceProductQuantity = require('../../utils/product/reduceProductQuantity');

module.exports = async (req, res, next) => {
  const { cooperativeId } = req.user;
  const { orderRef, paymentType, amount, transactionPin } = req.body;

  const invoice = await Invoice.findOne({ orderRef }).lean();
  if (!invoice) throw new Error(`Order reference ${orderRef} not found`);

  const result = await Payment.findOne({ orderRef });
  if (result) throw new Error('Payment has been verified already');

  const payload = {
    cooperativeId,
    orderRef,
    paymentType,
    amount,
    transactionPin,
    status: 'successful',
    paymentRef: uuidv4(),
    userId: invoice.user.id,
    invoice: invoice._id,
  };

  if (paymentType === 'fcWallet') {
    if (!transactionPin) throw new Error('Transaction Pin required');
    const user = await User.findById(invoice.user.id);
    if (!user) return res.status(422).send({ message: 'User does not exist' });

    if (!transactionPin)
      return res.status(422).send({ message: 'transaction pin is required' });

    const pinIsValid = await user.compareTransactionPin(transactionPin);

    if (!pinIsValid)
      return res.status(422).send({ message: 'Invalid transaction pin' });

    const { wallet } = user;

    if (wallet.balance < amount)
      return res.status(422).send({ message: 'Insufficient balance' });

    user.wallet.balance = wallet.balance - amount;
    await user.save();
  }

  const paymentDetails = await Payment.create(payload);

  await Invoice.updateOne({ orderRef }, { txIsValid: true });

  if (paymentDetails.status === 'successful') {
    await purchaseAlert();
    await sendMail({ paymentDetails, invoice });
    await reduceProductQuantity({ invoice });
  }

  const message = 'Payment verified  successfully';
  return response(res, next, 200, null, message);
};
