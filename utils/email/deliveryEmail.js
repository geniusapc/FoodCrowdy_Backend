const sendMail = require('./setup');
const { messageWrapper } = require('./messageWrapper');

const payload = (paymentDetails) => {
  return `
  <table  
    role="presentation"
    style
  >
    <tr>
      <td
        class="link-wrap"
        style="
          font-family: Open Sans, Helvetica,
            Tahoma, Arial, sans-serif;
          font-size: 0px;
          padding: 0;
          padding-bottom: 20px;
          word-break: break-word;"
      >
        <div
          style="
            font-family: Open Sans, Helvetica,
              Tahoma, Arial, sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 25px;
            text-align: left;
            color: #4f4f4f;
          "
        >
          <br />
          Hi ${paymentDetails.customer.name}, <br /><br />
          Your order number
          <a
            target="_blank"
            style="
              font-weight: bold;
              color: #008080;
            "
            href="#"
            >${paymentDetails.txRef}</a
          >
          registered! Check your order status
          at <br />
        </div>
      </td>
    </tr>
    <tr>
      <td


        style="
          font-family: Open Sans, Helvetica,
            Tahoma, Arial, sans-serif;
          font-size: 0px;
          padding: 0;
          word-break: break-word;
        "
      >
        <table
          
        
          role="presentation"
          style="
            border-collapse: separate;
            line-height: 100%;
          "
        >
          <tr>
            <td
              
              
              role="presentation"
              style="
                font-family: Open Sans,
                  Helvetica, Tahoma, Arial,
                  sans-serif;
                border: none;
                border-radius: 3px;
                cursor: auto;

                background: #e45b00;
              "

            >
              <a
                href="https://www.foodcrowdy.com/customer/account/my-orders"
                style="
                  display: inline-block;
                  background: #e45b00;
                  color: #ffffff;
                  font-family: Open Sans,
                    Helvetica, Tahoma, Arial,
                    sans-serif;
                  font-size: 18px;
                  font-weight: bold;
                  line-height: 120%;
                  margin: 0;
                  text-decoration: none;
                  text-transform: none;
                  padding: 10px 25px;

                  border-radius: 3px;
                "
                target="_blank"
              >
                Check Order Status
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td

        class="link-wrap"
        style="
          font-family: Open Sans, Helvetica,
            Tahoma, Arial, sans-serif;
          font-size: 0px;
          padding: 0;
          padding-bottom: 20px;
          word-break: break-word;
        "
      >
        <div
          style="
            font-family: Open Sans, Helvetica,
              Tahoma, Arial, sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 25px;
            text-align: left;
            color: #4f4f4f;
          "
        >
          <br />
          If you have any questions, please,
          <a
            target="_blank"
            style="
              font-weight: bold;
              color: #008080;
            "
            href="https://www.foodcrowdy.com/contact-us"
            >Contact Us</a
          >
          <br />
        </div>
      </td>
    </tr>
</table>          
`;
};

const sendPaymentReceipt = async ({ paymentDetails, invoice }) => {
  const message = payload({ paymentDetails, invoice });
  const mail = messageWrapper({ message });

  const msg = {
    from: 'FoodCrowdy <foodcrowdy@gmail.com>',
    to: paymentDetails.customer.email,
    subject: 'Receipt (Foodcrowdy) ',
    html: `${mail}`,
  };
  await sendMail(msg);
};
module.exports = sendPaymentReceipt;
