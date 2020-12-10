const axios = require('axios');
const { EBULKY_API, EBULKY_USER_NAME } = require('../../config/keys');

module.exports = async ({ otp, phoneNumber }) => {
  const payload = {
    SMS: {
      auth: {
        username: EBULKY_USER_NAME,
        apikey: EBULKY_API,
      },
      message: {
        sender: 'Foodcrowdy',
        messagetext: `${otp}`,
        flash: '0',
      },
      recipients: {
        gsm: [
          {
            msidn: phoneNumber,
            msgid: 'uniqueid1...',
          },
        ],
      },
    },
  };

  const result = await axios.post(
    'http://api.ebulksms.com:8080/sendsms.json',
    payload
  );
  console.log(result);
  console.log({ otp, phoneNumber });
  if (result.data.response.status === 'INVALID_RECIPIENT')
    return {
      error: result.data.response.status,
    };

  if (!result.data.response.status || result.data.response.status !== 'SUCCESS')
    throw new Error(result.data.response.status);
  return result;
};
