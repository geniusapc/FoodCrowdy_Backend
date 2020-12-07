const sendMail = require('./setup');
const { messageWrapper } = require('./messageWrapper');

const payload = ({ user, code }) => {
  return `
  <table style width="100%">
  <tr>
    <td
      style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif;  font-size: 23px; font-weight: bold; margin: 1rem 0; line-height: 30px; text-align: left; color: #4F4F4F; padding: 0; word-break: break-word;">    
        Hi ${user.name},
    </td>
  </tr>
  <tr>
    <td class="link-wrap"
      style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 0px; padding: 0; padding-bottom: 20px; word-break: break-word;">
      <div
        style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 16px; font-weight: 300; line-height: 15px; text-align: left; color: #4F4F4F;">
        Use your secret code below to claim your item from the delivery team.
      </div>
      <div
        style="font-size:1.4rem; font-weight: 600; text-align: center; margin: .5rem  0 0 0;">
        ${code}
      </div>
    </td>
  </tr>
</table>
  
  `;
};

const Email = async ({ user, code }) => {



  
  const message = payload({ user, code });
  const mail = messageWrapper({ message });

  const msg = {
    from: 'FoodCrowdy <foodcrowdy@gmail.com>',
    to: user.email,
    subject: 'Foodcrowdy - Cooperative Gift',
    html: mail,
  };
  await sendMail(msg);
};
module.exports = Email;
