/* eslint eqeqeq:"off", func-names:"off" */
const Payment = require('../../models/CooperativePayment');
const CoopInvoice = require('../../models/CoopInvoice');
const User = require('../../models/User');
const sendMail = require('../../utils/email/paymentReceipt');

const { FLW_SECRET_HASH } = require('../../config/keys');
const { purchaseAlert } = require('../../utils/sms/purchaseAlert');
const reduceProductQuantity = require('../../utils/product/reduceProductQuantity');

module.exports = async (req, res) => {
  const hash = req.headers['verif-hash'];
  if (!hash || hash !== FLW_SECRET_HASH) return res.sendStatus(400);

  const {
    status,
    tx_ref: orderRef,
    charged_amount: amount,
    flw_ref: paymentRef,
  } = req.body.data;

  const result = await Payment.findOne({ orderRef, paymentRef });
  const invoice = await CoopInvoice.findOne({ orderRef });

  if (!result && invoice) {
    const {
      user: { id: userId },
    } = invoice;

    const user = await User.findById(userId);
    if (!user) return res.status(400).send({ message: 'Invalid user' });

    const paymentDetails = {
      orderRef,
      paymentType: 'flutterwave',
      amount,
      status,
      paymentRef,
      cooperativeId: user.cooperativeId,
      userId: invoice.user.id,
      invoice: invoice._id,
    };

    await Payment.create(paymentDetails);
    await CoopInvoice.updateOne({ orderRef }, { txIsValid: true });

    if (paymentDetails.status === 'successful') {
      await purchaseAlert();
      await sendMail({ paymentDetails, invoice });
      await reduceProductQuantity({ invoice });
    }
  }


  return res.sendStatus(200);
};
