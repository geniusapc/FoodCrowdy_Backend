const NotFound = require('../middleware/notFound');
const errorHandler = require('../middleware/errorHandler');

const v1 = require('../api/v1');
const flutterwaveWebhook = require('../api/purchase/flutterwaveWebhook');
const api = require('../api');
const auth = require('../api/auth');
const settlement = require('../api/settlement');

module.exports = (app) => {
  app.get('/', (req, res) => {
    return res.send('Welcome to foodCrowdy cooperative');
  });

  app.post('/api/cooperative/purchase/flutter-payment', flutterwaveWebhook);
  app.use('/api', api);
  app.use('/api/auth', auth);
  app.use('/api/settlement', settlement);
  app.use('/v1/cooperative', v1);

  app.use(NotFound);
  app.use(errorHandler);
};
