const { CLIENTNAME } = require('../../config/keys');
const sendMail = require('./setup');

const sendRegMail = async (user, id) => {
  const logo =
    'https://res.cloudinary.com/cmcwebcode/image/upload/v1596211234/foodcrowdy/LOGO_FOODCROWDY_pa3ciy.png';
  let verificationLink = `${CLIENTNAME}/users/reset-password?token=${id}`;
  const coopId = user.cooperativeId ? user.cooperativeId : null;

  if (coopId) {
    verificationLink = `${verificationLink}&coopId=${coopId}`;
  }
  const msg = {
    from: 'info@foodcrowdy.com',
    to: user.email,
    subject: 'Foodcrowdy - Verify your email',
    text: `
            Thank you for registering on Foodcrowdy.
            Copy the address below to verify your account
            ${verificationLink}
            `,
    html: `
    <div style="background: #eee;">
    <div
      style="
        background: white;
        width: 80%;
        margin: auto;
      "
    >
      <div style="width:100px; ">
          <img  style ="width:100%"src=${logo}>
      </div>
      <div style="margin: 0 30px;"><br>
        <header style="color:#086568;  font-size: 36px; line-height: 42px;">
          Hello ${user.name},
        </header>
        <p>
            Thank you for registering on FoodCrowdy, please click on the button
            below to verify your account.
        </p>

        <div style="width:100%;">



<a href=${verificationLink} style="
              background: #ee7302;
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
              border-radius: 10px;
              width: 70%;
              padding: 12px 70px;
              margin: 0 auto;
              text-align: center;
              font-size: 12px;
              line-height: 42px; 
              color: #ffffff;

            ">
  Verify Email
</a>


        </div>

        
          <p>
            If you did not initiate this request please ignore or reply this mail
            to let us know <br/> 
            Warm     
           <p>Regards <br /> FoodCrowdy Team P.S </p>
            <p style= "color: rgba(238, 116, 2, 0.781);">
              <hr style="display:block; background:red"/>
            We love hearing from you and helping you
            with issues you may have, reply this mail if you have any questions or
            issues.
          </p>
          </p>
          <p style="color: #646464;"> If you are having troubles with the button above copy and paste this link in your web browser ${verificationLink}</p>
      </div>
    </div>
  </div>
            `,
  };
  await sendMail(msg);
};

module.exports = sendRegMail;
