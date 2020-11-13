/* eslint eqeqeq:"off", func-names:"off" */
const { v4: uuidv4 } = require('uuid');
const Invoice = require('../../models/CoopInvoice');
const Products = require('../../models/CoopProducts');
const Payment = require('../../models/CooperativePayment');

const sendMail = require('../../utils/email/paymentReceipt');

const { purchaseAlert } = require('../../utils/sms/purchaseAlert');
const { response, errorResponse } = require('../../utils/response');

const reduceProductQuantity = async ({ paymentDetails, invoice }) => {
  if (paymentDetails && paymentDetails.status === 'successful') {
    await sendMail({ paymentDetails, invoice });

    const ids = invoice.products.map((e) => e.id);

    const dbProducts = await Products.find({ _id: { $in: ids } }).select([
      'quantity',
      'measurement',
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
  const { orderRef } = req.body;

  const invoice = await Invoice.findOne({ orderRef })
    .select(['userId', 'products'])
    .lean();

  if (!invoice)
    return errorResponse(res, 422, `Order reference ${orderRef} not found`);

  const result = await Payment.findOne({ orderRef });

  if (result) {
    return errorResponse(res, 422, `Payment has been verified already`);
  }
  const paymentDetails = await Payment.create({
    ...req.body,
    paymentRef: uuidv4(),
  });

  await Invoice.updateOne({ orderRef }, { txIsValid: true });

  await purchaseAlert();
  await reduceProductQuantity({ paymentDetails, invoice });

  const message = 'Payment verified  successfully';
  return response(res, next, 200, null, message);
};
