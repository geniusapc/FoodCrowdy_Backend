const NotFound = require('../middleware/notFound');
const errorHandler = require('../middleware/errorHandler');

const cooperative = require('../api');
const flutterwaveWebhook = require('../api/purchase/flutterwaveWebhook');
const auth = require('../api/auth');
module.exports = (app) => {
  app.get('/', (req, res) => {
    return res.send('Welcome to foodCrowdy cooperative');
  });

  app.post('/api/cooperative/purchase/flutter-payment', flutterwaveWebhook);
  app.use('/api/cooperative/auth', auth);
  app.use('/v1/cooperative', cooperative);

  app.use(NotFound);
  app.use(errorHandler);
};
