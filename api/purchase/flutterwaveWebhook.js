/* eslint eqeqeq:"off", func-names:"off" */
const Payment = require('../../models/CooperativePayment');
const Product = require('../../models/CoopProducts');
const CoopInvoice = require('../../models/CoopInvoice');
const sendMail = require('../../utils/email/paymentReceipt');

const { FLW_SECRET_HASH } = require('../../config/keys');
const { purchaseAlert } = require('../../utils/sms/purchaseAlert');
const { genRandNum } = require('../../utils/randomCode/randomCode');

const reduceProductQuantity = async ({ paymentDetails, invoice, code }) => {
  if (paymentDetails.status === 'successful') {
    await sendMail({ paymentDetails, invoice, code });

    const ids = invoice.products.map((e) => e.id);

    const dbProducts = await Product.find({ _id: { $in: ids } }).select([
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

    await Product.bulkWrite(query);
  }
};

// payment gateway
module.exports = async (req, res) => {
  const hash = req.headers['verif-hash'];
  if (!hash || hash !== FLW_SECRET_HASH) return res.sendStatus(400);

  const code = genRandNum(4);

  const {
    status,
    tx_ref: orderRef,
    charged_amount: amount,
    flw_ref: paymentRef,
  } = req.body.data;

  const result = await Payment.findOne({ orderRef, paymentRef });
  const invoice = await CoopInvoice.findOne({ orderRef });

  if (!result && invoice) {
    const paymentDetails = {
      code,
      orderRef,
      paymentType: 'flutterwave',
      amount,
      status,
      paymentRef,
      cooperativeId: invoice.cooperativeId,
      userId: invoice.user.id,
    };

    await Payment.create(paymentDetails);
    await CoopInvoice.updateOne({ orderRef }, { txIsValid: true });

    await purchaseAlert();
    await reduceProductQuantity({ paymentDetails, invoice, code });
  }

  return res.sendStatus(200);
};
