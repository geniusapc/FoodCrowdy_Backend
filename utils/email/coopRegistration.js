const { CLIENTNAME } = require('../../config/keys');
const sendMail = require('./setup');

const sendRegMail = async (user, id) => {
  // const logo =
  //   'https://res.cloudinary.com/cmcwebcode/image/upload/v1596211234/foodcrowdy/LOGO_FOODCROWDY_pa3ciy.png';
  let verificationLink = `${CLIENTNAME}/cooperatives/registration?token=${id}&email=${user.email}`;
  const coopId = user.cooperativeId ? user.cooperativeId : null;

  if (coopId) {
    verificationLink = `${verificationLink}&coopId=${coopId}`;
  }
  const msg = {
    from: 'info@foodcrowdy.com',
    to: 'memcos@foodcrowdy.com',
    subject: 'Foodcrowdy - Verify your email',
    text: `
            Thank you for registering on Foodcrowdy.
            Copy the address below to verify your account
            ${verificationLink}
            `,
    html: `
    <div style="background: #eee;">
  <div style="background: white; width: 80%; margin: auto;">
    <div style="width: 100px;"><img style="width: 100%;"
        src="https://res.cloudinary.com/accelerar/image/upload/v1601208829/FrontendAssests/Carousels/logoFood_tn5wkj.svg" />
    </div>
    <div style="margin: 0 30px;"><br />
      <header style="color: #086568; font-size: 36px; line-height: 42px;">Hello ${user.name},</header>
      <p>Thank you for registering on FoodCrowdy, please click on the button below to verify your account.</p>
      <div style="width: 100%;"><a
          style="background: #ee7302; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); border-radius: 10px; width: 70%; padding: 12px 70px; margin: 0 auto; text-align: center; font-size: 12px; line-height: 42px; color: #ffffff;"
          href=${verificationLink}>
          Verify Email </a></div>
      <br />
      <p style="color: #ff0000; margin: 20px 0;"><strong>Important Notice: You should
          copy the link below to a chrome or firefox browser to verify your account.</strong><br /> <br /> <a
          style="margin: 26px 0;"
          href=${verificationLink}>
          ${verificationLink}
        </a></p>
      <p>If you did not initiate this request please ignore or reply to this mail to let us know</p>
      <p>Warm Regards <br /> FoodCrowdy Team</p>
      <hr style="display: block; background: red;" />
      <p style="color: rgba(238, 116, 2, 0.781);">We love hearing from you and helping you with issues you may have,
        reply to this mail if you have any questions or issues.</p>
    </div>
  </div>
</div>
            `,
  };
  await sendMail(msg);
};

module.exports = sendRegMail;
