const sendMail = require('./setup');
const meassageWrapper = require('./messageWrapper');

const inner = ({ invoice, paymentDetails }) => {
  return `
    <table role="presentation" >
        <tr>
            <td class="link-wrap" style="
                font-size: 0px;
                padding: 0;
                padding-bottom: 20px;
                word-break: break-word;"
            >
                <div style="
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 25px;
                    text-align: left;
                    color: #4f4f4f;"
                >
                    <table style="
                        color: #000000;
                        font-size: 13px;
                        line-height: 22px;
                        table-layout: auto;
                        width: 100%;
                        border: none;"
                    >
                        <tr>
                          <td> 
                              Dear, ${invoice.user.name}
                          </td>
                        </tr>
                        <tr>
                            <td> 
                                A transaction was successfully completed with your cooperative account, and here is the summary of the transaction.
                            </td>
                        </tr>
                        <tr>
                            <td style="color: #999999;">Merchant</td>
                            <td>Foodcrowdy</td>
                        </tr>
                        <tr>
                            <td style="color: #999999;">Transaction Reference</td>
                            <td>${invoice.orderRef}</td>
                        </tr>
                        <tr>
                            <td style="color: #999999;">Amount Paid</td>
                            <td>NGN ${paymentDetails.amount}</td>
                        </tr>
                    </table>
                    <br>
            </td>
        </tr>
    </table>
`;
};

const sendPaymentReceipt = async ({ paymentDetails, invoice }) => {
  const message = inner({ paymentDetails, invoice });
  const mail = meassageWrapper({message});
  const msg = {
    from: 'FoodCrowdy <foodcrowdy@gmail.com>',
    to: invoice.user.email,
    subject: 'Receipt (Foodcrowdy) ',
    html: `${mail}`,
  };
  await sendMail(msg);
};

module.exports = sendPaymentReceipt;
