const sendMail = require('./setup');
const { CLIENTNAME } = require('../../config/keys');

const payload = ({ verificationLink, user }) => {
  return `<!doctype html>
  <html>
  
  <head>
      <title>FoodCrowdy Forgotten password</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style type="text/css">
          span.productOldPrice {
              color: #A0131C;
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
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700" rel="stylesheet" type="text/css">
      <style type="text/css">
          @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700);
      </style>
      <style type="text/css">
          @media only screen and (min-width:480px) {
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
          @media only screen and (max-width:480px) {
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
          
          @media only screen and (max-width:480px) {
              .menu-checkbox[type="checkbox"]~.inline-links {
                  display: none !important;
              }
              .menu-checkbox[type="checkbox"]:checked~.inline-links,
              .menu-checkbox[type="checkbox"]~.menu-trigger {
                  display: block !important;
                  max-width: none !important;
                  max-height: none !important;
                  font-size: inherit !important;
              }
              .menu-checkbox[type="checkbox"]~.inline-links>a {
                  display: block !important;
              }
              .menu-checkbox[type="checkbox"]:checked~.menu-trigger .menu-icon-close {
                  display: block !important;
              }
              .menu-checkbox[type="checkbox"]:checked~.menu-trigger .menu-icon-open {
                  display: none !important;
              }
          }
      </style>
      <style type="text/css">
          @media only screen and (min-width:481px) {
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
              width: 100%
          }
          
          .server-box-one a,
          .server-box-two a {
              text-decoration: underline;
              color: #2E9CC3;
          }
          
          .server-img img {
              width: 100%
          }
          
          .server-box-one a,
          .server-box-two a {
              text-decoration: underline;
              color: #2E9CC3;
          }
          
          .server-img img {
              width: 100%
          }
          
          .server-box-one a,
          .server-box-two a {
              text-decoration: underline;
              color: #2E9CC3;
          }
      </style>
  </head>
  
  <body style="background-color:#FFFFFF;">
      <div style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; background-color: #FFFFFF;">
          <div class="body-wrapper" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; padding-bottom: 20px; box-shadow: 0 4px 10px #ddd; background: #F2F2F2; background-color: #F2F2F2; margin: 0px auto; max-width: 600px; margin-bottom: 10px;">
              <table style="background:#F2F2F2;background-color:#F2F2F2;width:100%;">
                  <tbody>
                      <tr>
                          <td style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; direction: ltr; font-size: 0px; padding: 10px 20px; text-align: center;">
  
                              <div class="pre-header" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; height: 1px; overflow: hidden; margin: 0px auto; max-width: 560px;">
                                  <table style="width:100%;">
                                      <tbody>
                                          <tr>
                                              <td style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; direction: ltr; font-size: 0px; padding: 0px; text-align: center;">
  
                                                  <div class="column-per-100 outlook-group-fix" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 0px; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%;">
                                                      <table style="vertical-align:top;" width="100%">
                                                          <tr>
                                                              <td style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 0px; padding: 0; word-break: break-word;">
                                                                  <div style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 1px; font-weight: 400; line-height: 0; text-align: center; color: #F2F2F2;">Please confirm your password request</div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </div>
  
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
  
                              <div class="header" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; line-height: 22px; padding: 15px 0; margin: 0px auto; max-width: 560px;">
                                  <table style="width:100%;">
                                      <tbody>
                                          <tr>
                                              <td style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; direction: ltr; font-size: 0px; padding: 0px; text-align: center;">
  
                                                  <div class="column-per-25 outlook-group-fix" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 0px; text-align: left; direction: ltr; display: inline-block; vertical-align: middle; width: 100%;">
                                                      <table style="vertical-align:middle;" width="100%">
                                                          <tr>
                                                              <td style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 0px; padding: 0; word-break: break-word;">
                                                                  <table style="border-collapse:collapse;border-spacing:0px;">
                                                                      <tbody>
                                                                          <tr>
                                                                              <td style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif;width: 160px;" width="160">
                                                                                  <a href="https://www.foodcrowdy.com/" target="_blank" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; padding: 0 10px;"> <img alt="VamShop" height="auto" src="https://res.cloudinary.com/accelerar/image/upload/v1597476071/Html_Order_Image/LOGO_FOODCROWDY_pa3ciy_pdtwwa.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;"
                                                                                          width="160"> </a>
                                                                              </td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </div>
  
  
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
  
                              <div class="notice-wrap margin-bottom" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; margin: 0px auto; max-width: 560px; margin-bottom: 15px;">
                                  <table style="width:100%;">
                                      <tbody>
                                          <tr>
                                              <td style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; direction: ltr; font-size: 0px; padding: 0px; text-align: center;">
  
                                                  <div class="column-per-100 outlook-group-fix" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 0px; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%;">
                                                      <table width="100%">
                                                          <tbody>
                                                              <tr>
                                                                  <td style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; background-color: #ffffff; border-radius: 10px; vertical-align: top; padding: 30px 25px;" bgcolor="#ffffff" valign="top">
                                                                      <table style width="100%">
                                                                          <tr>
                                                                              <td style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 0px; padding: 0; word-break: break-word;">
                                                                                  <div style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 26px; font-weight: bold; line-height: 30px; text-align: left; color: #4F4F4F;">Hi ${user.name},</div>
                                                                              </td>
                                                                          </tr>
                                                                          <tr>
                                                                              <td class="link-wrap" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 0px; padding: 0; padding-bottom: 20px; word-break: break-word;">
                                                                                  <div style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px; text-align: left; color: #4F4F4F;"><br> We receieved a request to reset your password on your FoodCrowdy account click
                                                                                      the button below to reset it.<br> If you did not initiate this request please ignore or reply this mail to let us know.
                                                                                      This password reset is only valid for 24hrs.
                                                                                      
                                                                                         <br/></div>
                                                                              </td>
                                                                          </tr>
                                                                          <tr>
                                                                              <td style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 0px; padding: 0; word-break: break-word;">
                                                                                  <table style="border-collapse:separate;line-height:100%;">
                                                                                      <tr>
                                                                                          <td style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; border: none; border-radius: 3px; cursor: auto;  background: #e45b00;" valign="middle"> 
                                                                                          <a href=${verificationLink} style="display: inline-block; background: #e45b00; color: #ffffff; font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 18px; font-weight: bold; line-height: 120%; margin: 0; text-decoration: none; text-transform: none; padding: 10px 25px;  border-radius: 3px;"
                                                                                                  target="_blank"> Reset Password</a> </td>
                                                                                      </tr>
                                                                                  </table>
                                                                              </td>
                                                                          </tr>
                                                                          <tr>
                                                                              <td class="link-wrap" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 0px; padding: 0; padding-bottom: 20px; word-break: break-word;">
                                                                                  <div style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px; text-align: left; color: #4F4F4F;"><br>Warm Regards<br>
                                                                                      FoodCrowdy Team<br><br> If you have any questions, send a mail to <br> <a href="mailto:info@foodcrowdy.com?subject=We are happy to hear from you" style='font-weight: bold;color: #2E9CC3;'>
                                                                                      info@foodcrowdy.com
                                                                                      <br> </div>
                                                                                      
                                                                              </td>
                                                                          </tr>
                                                                      </table>
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </div>
  
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
  
          <div class="footer-wrapper" style="margin: 0px auto; max-width: 600px;">
              <table style="background-color: #FFFFFF; width: 100%;" width="100%">
                  <tbody>
                      <tr>
                          <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
  
                              <div class="footer-information" style="margin:0px auto;max-width:600px;">
                                  <table style="background-color: #FFFFFF; width: 100%;" width="100%">
                                      <tbody>
                                          <tr>
                                              <td style="direction:ltr;font-size:0px; padding:0px;text-align:center;">
  
                                                  <div class="column-per-100 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                      <table style="background-color: #FFFFFF; vertical-align: top;" width="100%" valign="top">
                                                          <tbody>
                                                              <tr>
                                                                  <td style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                                      <div style="font-family:OpenSans, Helvetica, Tahoma, Arial, sans-serif;font-size:12px;font-weight:400;line-height:20px;text-align:center;color:#4F4F4F;">
                                                                          <div>
                                                                              <a href="https://www.foodcrowdy.com" target="_blank" style="color: #333333; line-height: 20px; text-decoration: underline;">Home</a> |
                                                                                      <a href="https://www.foodcrowdy.com/products/all" target="_blank" style="color: #333333; line-height: 20px; text-decoration: underline;">Products</a> |
  
                                                                                  </div>
  
                                                                                  <br /> &copy; 2020 FoodCrowdy
                                                                                  <br />
                                                  </div>
                                                  </td>
                                                  </tr>
                                                  </tbody>
                                                  </table>
                              </div>
                              </td>
                              </tr>
                              </tbody>
                              </table>
          </div>
  
          </td>
          </tr>
          </tbody>
          </table>
      </div>
      </div>
  </body>
  </html>`;
};

const sendForgotMail = async (user, id) => {
  let verificationLink = `${CLIENTNAME}/users/reset-password?token=${id}`;
  const coopId = user.cooperative.length ? user.cooperative[0] : null;

  if (coopId) {
    verificationLink = `${verificationLink}&coopId=${coopId}`;
  }

  const mail = payload({ verificationLink, user });
  const msg = {
    from: 'Foodcrowdy <info@foodcrowdy.com>',
    to: user.email,
    subject: 'Foodcrowdy - Reset password',
    text: mail,
    html: mail,
  };
  await sendMail(msg);
};
module.exports = sendForgotMail;
