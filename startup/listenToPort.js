const fs = require('fs');
const https = require('https');
const debug = require('debug')('app:start');
const path = require('path');
const { NODE_ENV } = require('../config/keys');

module.exports = (app) => {
  const { PORT } = process.env;

  if (NODE_ENV === 'production') {
    const cert = path.join(__dirname, '..', '..', '..', '..', 'bundle.crt');
    const key = path.join(__dirname, '..', '..', '..', '..', 'server.key');

    const privateKey = fs.readFileSync(key, 'utf8');
    const certificate = fs.readFileSync(cert, 'utf8');

    const credentials = {
      key: privateKey,
      cert: certificate,
    };
    const server = https.createServer(credentials, app);
    server.listen(PORT, () => {
      debug(`listening on port  ${PORT}`);
    });
  } else {
    app.listen(PORT, () => {
      debug(`Listening on port ${PORT}`);
    });
  }
};
