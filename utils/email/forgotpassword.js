const sendMail = require('./setup');
const { CHANGE_PASSWORD_LINK } = require('../../constants');
const messageWrapper = require('./messageWrapper');

const payload = ({ verificationLink, user }) => {
  return `
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
  `;
};

const sendForgotMail = async (user, id) => {
  let verificationLink = `${CHANGE_PASSWORD_LINK}?token=${id}`;
  const coopId = user.cooperativeId;

  if (coopId) {
    verificationLink = `${verificationLink}&coopId=${coopId}`;
  }

  const message = payload({ verificationLink, user });
  const mail = messageWrapper({ message });

  const msg = {
    from: 'FoodCrowdy <foodcrowdy@gmail.com>',
    to: user.email,
    subject: 'Foodcrowdy - Reset password',
    html: mail,
  };
  await sendMail(msg);
};
module.exports = sendForgotMail;
