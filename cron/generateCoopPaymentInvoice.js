const Cooperative = require('../models/Cooperative');
const Payment = require('../models/CooperativePayment');
const Settlement = require('../models/Settlement');

module.exports = async () => {
  const cooperatives = await Cooperative.find({});

  const invoice = await Promise.all(
    cooperatives.map(async ({ _id }) => {
      const conditions = {
        status: 'successful',
        settlementInvoiceIsGenerated: { $not: { $eq: true } },
        cooperativeId: _id,
        paymentType: { $in: ['fcWallet', 'coopWallet'] },
        deliveryStatus: 'delivered',
      };
      const filter = ['orderRef', 'amount', 'cooperativeId'];

      const settlement = await Payment.find(conditions).select(filter);

      if (settlement.length) {
        const total = settlement.reduce((a, { amount }) => a + amount, 0);
        const orderRef = settlement.map((e) => e.orderRef);

        return {
          totalPrice: total,
          orderRef,
          cooperativeId: settlement[0].cooperativeId,
        };
      }
      return {};
    })
  );

  const validInvoice = invoice.filter((e) => Object.keys(e).length !== 0);

  if (validInvoice.length) {
    const listofOrderRef = validInvoice.map((e) => e.orderRef).flat();
    await Payment.updateMany(
      { orderRef: { $in: listofOrderRef } },
      { settlementInvoiceIsGenerated: true }
    );

    await Settlement.create(validInvoice);
  }
};
