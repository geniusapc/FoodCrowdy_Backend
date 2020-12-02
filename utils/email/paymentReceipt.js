const sendMail = require('./setup');
const {
  ALL_PRODUCTS_LINK,
  CONTACTUS_LINK,
  SITE,
  USER_PROFILE_LINK,
  SITE_LOGO,
} = require('../../constants');

const payload = ({ paymentDetails, invoice }) => {
  return `<!DOCTYPE html>
  <!DOCTYPE html>
  <html>
  
  <head>
      <title>FoodCrowdy | Customer Order</title>
  
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style type="text/css">
          span.productOldPrice {
              color: #a0131c;
              text-decoration: line-through;
          }
          
          #outlook a {
              padding: 0;
          }
          
          body {
              margin: 0;
              padding: 0;
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
          }
          
          table,
          td {
              border-collapse: collapse;
          }
          
          img {
              border: 0;
              height: auto;
              line-height: 100%;
              outline: none;
              text-decoration: none;
              -ms-interpolation-mode: bicubic;
          }
          
          p {
              display: block;
              margin: 13px 0;
          }
      </style>
  
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700" rel="stylesheet" type="text/css" />
      <style type="text/css">
          @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700);
      </style>
      <style type="text/css">
          @media only screen and (min-width: 480px) {
              .column-per-100 {
                  width: 100% !important;
                  max-width: 100%;
              }
              .column-per-25 {
                  width: 25% !important;
                  max-width: 25%;
              }
              .column-per-75 {
                  width: 75% !important;
                  max-width: 75%;
              }
              .column-per-48-4 {
                  width: 48.4% !important;
                  max-width: 48.4%;
              }
              .column-per-50 {
                  width: 50% !important;
                  max-width: 50%;
              }
          }
      </style>
      <style type="text/css">
          @media only screen and (max-width: 480px) {
              table.full-width-mobile {
                  width: 100% !important;
              }
              td.full-width-mobile {
                  width: auto !important;
              }
          }
          
          noinput.menu-checkbox {
              display: block !important;
              max-height: none !important;
              visibility: visible !important;
          }
          
          @media only screen and (max-width: 480px) {
              .menu-checkbox[type='checkbox']~.inline-links {
                  display: none !important;
              }
              .menu-checkbox[type='checkbox']:checked~.inline-links,
              .menu-checkbox[type='checkbox']~.menu-trigger {
                  display: block !important;
                  max-width: none !important;
                  max-height: none !important;
                  font-size: inherit !important;
              }
              .menu-checkbox[type='checkbox']~.inline-links>a {
                  display: block !important;
              }
              .menu-checkbox[type='checkbox']:checked~.menu-trigger .menu-icon-close {
                  display: block !important;
              }
              .menu-checkbox[type='checkbox']:checked~.menu-trigger .menu-icon-open {
                  display: none !important;
              }
          }
      </style>
      <style type="text/css">
          @media only screen and (min-width: 481px) {
              .products-list-table img {
                  width: 120px !important;
                  display: block;
              }
              .products-list-table .image-column {
                  width: 20% !important;
              }
          }
          
          a {
              color: #000;
          }
          
          .server-img img {
              width: 100%;
          }
          
          .server-box-one a,
          .server-box-two a {
              text-decoration: underline;
              color: #008080;
          }
          
          .server-img img {
              width: 100%;
          }
          
          .server-box-one a,
          .server-box-two a {
              text-decoration: underline;
              color: #008080;
          }
          
          .server-img img {
              width: 100%;
          }
          
          .server-box-one a,
          .server-box-two a {
              text-decoration: underline;
              color: #008080;
          }
      </style>
  </head>
  
  <body style="background-color: #ffffff">
      <div style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif;">
          <div class="body-wrapper" style="
              padding-bottom: 20px;
              box-shadow: 0 4px 10px #ddd;
              background-color: #f2f2f2;
              margin: 0px auto;
              max-width: 600px;
            ">
              <table role="presentation" style="background-color: #f2f2f2; width: 100%">
                  <tbody>
                      <tr>
                          <td style=" direction: ltr; font-size: 0px; padding: 10px 20px;  text-align: center;">
                           
                              <div class="header" style="
                        font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif;
                        line-height: 22px;
                        padding: 15px 0;
                        margin: 0px auto;
                        max-width: 560px;
                      ">
                                  <table role="presentation" style="width: 100%">
                                      <tbody>
                                          <tr>
                                              <td style="
                                font-family: Open Sans, Helvetica, Tahoma, Arial,
                                  sans-serif;
                                direction: ltr;
                                font-size: 0px;
                                padding: 0px;
                                text-align: center;
                              ">
  
                                                  <div class="column-per-25 outlook-group-fix" style="
                                  font-family: Open Sans, Helvetica, Tahoma, Arial,
                                    sans-serif;
                                  font-size: 0px;
                                  text-align: left;
                                  direction: ltr;
                                  display: inline-block;
                                  vertical-align: middle;
                                  width: 100%;
                                ">
                                                      <table role="presentation" style="vertical-align: middle">
                                                          <tr>
                                                              <td style="
                                        font-family: Open Sans, Helvetica, Tahoma,
                                          Arial, sans-serif;
                                        font-size: 0px;
                                        padding: 0;
                                        word-break: break-word;
                                      ">
                                                                  <table role="presentation" style="
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        ">
                                                                      <tbody>
                                                                          <tr>
                                                                              <td style="
                                                font-family: Open Sans, Helvetica,
                                                  Tahoma, Arial, sans-serif;
                                                width: 160px;
                                              ">
                                                                                  <a href = ${SITE} target="_blank" style="
                                                  font-family: Open Sans, Helvetica,
                                                    Tahoma, Arial, sans-serif;
                                                  padding: 0 10px;
                                                ">
                                                                                      <img alt=" FoodCrowdy" height="100" src=${SITE_LOGO} style="
                                                    border: 0;
                                                    display: block;
                                                    outline: none;
                                                    text-decoration: none;
                                                    height: auto;
                                                    width: 100%;
                                                    font-size: 13px;
                                                  " />
                                                                                  </a>
                                                                              </td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </div>
  
                                                  <div class="column-per-75 outlook-group-fix navigation-bar" style="
                                  font-family: Open Sans, Helvetica, Tahoma, Arial,
                                    sans-serif;
                                  font-size: 0px;
                                  text-align: left;
                                  direction: ltr;
                                  display: inline-block;
                                  vertical-align: middle;
                                  width: 100%;
                                ">
                                                      <table role="presentation" style="vertical-align: middle">
                                                          <tr>
                                                              <td style="
                                        font-family: Open Sans, Helvetica, Tahoma,
                                          Arial, sans-serif;
                                        text-align: right;
                                        font-size: 0px;
                                        word-break: break-word;
                                      ">
                                                                  <div class="inline-links" style="
                                          font-family: Open Sans, Helvetica, Tahoma,
                                            Arial, sans-serif;
                                        ">
  
                                                                      <a class="link" href=${USER_PROFILE_LINK} target="_blank" style="
                                            display: inline-block;
                                            color: #808080;
                                            font-family: Open Sans, Helvetica,
                                              Tahoma, Arial, sans-serif;
                                            font-size: 13px;
                                            font-weight: bold;
                                            line-height: 22px;
                                            text-decoration: none;
                                            text-transform: none;
                                            padding: 0 10px;
                                          ">
                                          My Account
                                        </a>
  
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </div>
  
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
  
                              <div class="column-per-100 outlook-group-fix" style="
                                  font-family: Open Sans, Helvetica, Tahoma, Arial,
                                    sans-serif;
                                  font-size: 0px;
                                  text-align: left;
                                  direction: ltr;
                                  display: inline-block;
                                  vertical-align: top;
                                  width: 100%;
                                ">
                                  <table role="presentation">
                                      <tbody>
                                          <tr>
                                              <td style="
                                          background-color: #ffffff;
                                          border-radius: 10px;
                                          vertical-align: top;
                                          padding: 30px 25px;
                                        ">
                                                  <table role="presentation" >
                                                      <tr>
                                                          <td class="link-wrap" style="
                                                font-size: 0px;
                                                padding: 0;
                                                padding-bottom: 20px;
                                                word-break: break-word;
                                              ">
                                                    <div style="
                                                  font-size: 16px;
                                                  font-weight: 400;
                                                  line-height: 25px;
                                                  text-align: left;
                                                  color: #4f4f4f;
                                                ">
                                                                  <br /> Dear, ${invoice.user.name}
                                                                  <br /><br /> A transaction was successfully completed with your cooperative account, and here is the summary of the transaction. <br /><br /> 
                                                                 
                                                                 
                                      <table style="
                                        color: #000000;
                                        font-family: Open Sans, Helvetica, Tahoma,
                                          Arial, sans-serif;
                                        font-size: 13px;
                                        line-height: 22px;
                                        table-layout: auto;
                                        width: 100%;
                                        border: none;
                                      "
                                    >
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
                                        </table> <br>
                                        
                                        <div>
                                          <b>Note:</b> Use the transaction reference  above to claim your item from the delivery
                                          team. <br /><br /> 
                                          If you have any questions about this transaction, please Contact-Us.          
                                          Thank you for using Foodcrowdy. Your No 1 foodplug
                                        </div>
                                        
                                                            
                                                          </td>
                                                      </tr>
  
                                 
                                        </table>
                                        <table role="presentation" style="vertical-align: top" >
                                        <tr>
                                          <td
                                            style="
                                              width: 60px;
                                              margin-bottom: 10px;
                                              vertical-align: top;
                                            "
                                            class="server-img"
                                          >
                                            <img
                                              src="https://res.cloudinary.com/accelerar/image/upload/v1597474260/Html_Order_Image/contact_nks3vm.png"
                                              alt="foodcrowdy"
                                              style="width: 100%; max-width: 60px"
                                            />
                                          </td>
                                          <td
                                            style="
                                              line-height: 20px;
                                              color: #333;
                                              padding-left: 10px;
                                            "
                                          >
                                            <div
                                              style="
                                                font-size: 16px;
                                                font-weight: bold;
                                                margin-bottom: 8px;
                                              "
                                            >
                                              Contact Information:
                                            </div>
                                            <div style=" font-size: 14px;">
                                              <strong>Phone:</strong> +234 8117001514<br />
                                            </div>
                                            <div style="font-size: 14px;">
                                              <strong>E-mail:</strong>  info@foodcrowdy.com<br />
                                            </div>
                                          </td>
                                        </tr>
                                      </table> 
  
  
                                      <div style="
                                      font-size: 12px;
                                      font-weight: 400;
                                      line-height: 20px;
                                      text-align: center;
                                      color: #4f4f4f;
                                      margin-top: 20px;
                                    ">
                                  <div>
                                    <a href=${SITE} target="_blank" style="
                                          color: #333333;
                                          text-decoration: underline;
                                        ">Home</a
                                      >
                                      |          
                                      <a
                                        href=${ALL_PRODUCTS_LINK}
                                        target="_blank"
                                        style="
                                          color: #333333;
                                          text-decoration: underline;
                                        "
                                        >Products</a
                                      >
                                      |
                                      <a
                                        href=${CONTACTUS_LINK}
                                        style="
                                          color: #333333;
                                          text-decoration: underline;
                                        "
                                        >Contact us</a
                                      >
                                    </div>
                                    <br />
                                    &copy; 2020 FoodCrowdy
                                    <br />
                                  </div>
  
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                
                            </td>
                          </tr>
  
              </table>
              </div>
  
  
    
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </body>
    </html>
  
`;
};

const sendPaymentReceipt = async ({ paymentDetails, invoice }) => {
  const mail = payload({ paymentDetails, invoice });
  const msg = {
    from: 'FoodCrowdy <info@foodcrowdy.com>',
    to: invoice.user.email,
    subject: 'Receipt (Foodcrowdy) ',
    html: `${mail}`,
  };
  await sendMail(msg);
};

module.exports = sendPaymentReceipt;
