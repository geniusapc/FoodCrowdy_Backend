const NotFound = require('../middleware/notFound');
const errorHandler = require('../middleware/errorHandler');

const cooperative = require('../api');
module.exports = (app) => {
  app.get('/', (req, res) => {
    return res.send('Welcome to foodCrowdy cooperative');
  });

  app.use('/v1/cooperative', cooperative);

  app.use(NotFound);
  app.use(errorHandler);
};
