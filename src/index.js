const express = require('express');
require('dotenv').config();

const routes = require('./routes/routes');
const middlewares = require('./middlewares/Middlewares');
const errorHandler = require('./middlewares/ErrorHandler');
const notfound = require('./middlewares/NotFound');

const app = express();
const PORT = process.env.PORT || 5000;

/* middlewares */
app.use(middlewares);

/* routes */
app.use(routes);

/** These MUST be called last */
app.use(notfound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
