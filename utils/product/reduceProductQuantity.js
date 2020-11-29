/* eslint eqeqeq:"off"  */
const Product = require('../../models/CoopProducts');

const reduceProductQuantity = async ({ invoice }) => {
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
};

module.exports = reduceProductQuantity;
