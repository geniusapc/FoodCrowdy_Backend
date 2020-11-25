/* eslint eqeqeq:"off", func-names:"off" */
const { v4: uuidv4 } = require('uuid');
const Invoice = require('../../models/CoopInvoice');
const Products = require('../../models/CoopProducts');
const Payment = require('../../models/CooperativePayment');
const User = require('../../models/User');

const sendMail = require('../../utils/email/paymentReceipt');

const { purchaseAlert } = require('../../utils/sms/purchaseAlert');
const { response } = require('../../utils/response');

const reduceProductQuantity = async ({ paymentDetails, invoice }) => {
  if (paymentDetails && paymentDetails.status === 'successful') {
    await sendMail({ paymentDetails, invoice });

    const ids = invoice.products.map((e) => e.id);

    const dbProducts = await Products.find({ _id: { $in: ids } }).select([
      'quantity',
    ]);

    const query = dbProducts.map((e) => {
      const invoiceProduct = invoice.products.find(
        (item) => item.id == e._id.toString()
      );

      return {
        updateOne: {
          filter: { _id: invoiceProduct.id },
          update: {
            $set: {
              quantity: e.quantity - invoiceProduct.qty,
            },
          },
        },
      };
    });

    await Products.bulkWrite(query);
  }
};

module.exports = async (req, res, next) => {
  const { cooperativeId } = req.user;
  const { orderRef, type, amount, transactionPin } = req.body;

  const payload = {
    cooperativeId,
    orderRef,
    type,
    amount,
    transactionPin,
    status: 'successful',
    paymentRef: uuidv4(),
  };

  const invoice = await Invoice.findOne({ orderRef }).lean();

  if (!invoice) throw new Error(`Order reference ${orderRef} not found`);

  payload.userId = invoice.user.id; // attaching user to the payment

  const result = await Payment.findOne({ orderRef });

  if (result) throw new Error('Payment has been verified already');

  if (type === 'fcWallet') {
    const user = await User.findById(invoice.user.id);
    if (!user) return res.status(422).send({ message: 'User does not exist' });

    if (!transactionPin)
      return res.status(422).send({ message: 'transaction pin is required' });

    const pinIsValid = await user.compareTransactionPin(transactionPin);

    if (!pinIsValid)
      return res.status(422).send({ message: 'Invalid transaction pin' });

    if (user.walletBalance < amount)
      return res.status(422).send({ message: 'Insufficient balance' });
    const { walletBalance } = user;

    user.walletBalance = walletBalance - amount;
    await user.save();
  }

  const paymentDetails = await Payment.create(payload);

  await Invoice.updateOne({ orderRef }, { txIsValid: true });

  await purchaseAlert();
  await reduceProductQuantity({ paymentDetails, invoice });

  const message = 'Payment verified  successfully';
  return response(res, next, 200, null, message);
};
