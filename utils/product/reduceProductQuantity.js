/* eslint eqeqeq:"off"  */
const CoopProduct = require('../../models/CoopProducts');
const Product = require('../../models/Products');

const reduceCoopProductQuantity = async ({ invoice }) => {
  const ids = invoice.products.map((e) => e.id);

  const dbProducts = await CoopProduct.find({ _id: { $in: ids } }).select([
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

  await CoopProduct.bulkWrite(query);
};


module.exports.reduceProductQuantity = async ({ invoice }) => {
  const ids = invoice.products.map((e) => e.id);

  const dbProducts = await Product.find({
    _id: { $in: ids },
  }).select({
    quantity: 1,
    measurement: 1,
  });

  const query = dbProducts.map((e) => {
    const invoiceProduct = invoice.products.find(
      (item) => item.id == e._id.toString()
    );
    const convertionUnit = e.measurement.find(
      (p) => p.conversionType === invoiceProduct.measurementType
    ).conversionUnit;

    return {
      updateOne: {
        filter: { _id: invoiceProduct.id },
        update: {
          $set: {
            quantity:
              (e.quantity * convertionUnit - invoiceProduct.quantity) /
              convertionUnit,
          },
        },
      },
    };
  });

  await Product.bulkWrite(query);
};

module.exports = reduceCoopProductQuantity;
