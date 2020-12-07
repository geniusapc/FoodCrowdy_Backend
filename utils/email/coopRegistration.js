const { CLIENTNAME } = require('../../config/keys');
const sendMail = require('./setup');
const messageWrapper = require('./messageWrapper');
const inner = ({ verificationLink, user }) => {
  return `
   
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
        Hello, ${user.name}
    </td>
  </tr>

  <tr style="width: 100%;">
    <td> 
      Thank you for registering on FoodCrowdy, please click on the button below to verify your account.<br/><br/>
    </td>
  </tr> 
      
  <tr>
    <td> 
      <a
        style="background: #ee7302; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); border-radius: 10px; width: 70%; padding: 12px 70px; margin: 0 auto; text-align: center; font-size: 12px; line-height: 42px; color: #ffffff;"
        href=${verificationLink}>
        Verify Email 
      </a><br/><br/>
    </td>
  </tr>
  <tr style="color: #ff0000; margin: 20px 0;">
      <td>
        <strong>
          Important Notice: You should
          copy the link below to a chrome or firefox browser to verify your account.
        </strong><br /> 
        <a
            style="margin: 26px 0;"
            href=${verificationLink}>
            ${verificationLink}
        </a>
      </td>
  </tr>
  <tr >
    <td >
      <hr style="display: block; background: red;" />
    </td>
  </tr>
  <tr style="color: rgba(238, 116, 2, 0.781);">
    <td>
      If you did not initiate this request please ignore or reply to this mail to let us know 
      Warm Regards <br /> FoodCrowdy Team
    </td>
  </tr>
</table>
  `;
};

const sendRegMail = async (user, id) => {
  let verificationLink = `${CLIENTNAME}/cooperatives/registration?token=${id}&email=${user.email}`;
  const coopId = user.cooperativeId ? user.cooperativeId : null;

  if (coopId) {
    verificationLink = `${verificationLink}&coopId=${coopId}`;
  }

  const message = inner({ verificationLink, user });
  const payload = messageWrapper({ message });

  const msg = {
    from: 'FoodCrowdy <foodcrowdy@gmail.com>',
    to: `${user.email}, memcos@foodcrowdy.com`,
    subject: 'Foodcrowdy - Verify your email',
    html: payload,
  };

  await sendMail(msg);
};

module.exports = sendRegMail;
