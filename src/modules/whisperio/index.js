const express = require('express');
const http = require('http');
require('dotenv').config();

const Socket = require('./utils/socketio');
const routes = require('./routes/routes');

const router = express.Router();
const PORT = process.env.SOCKETIO_PORT;

const app = express();
const server = http.createServer(app);
const io = new Socket(server);

io.connection();
router.use(routes);

server.listen(PORT, () => {
  console.log(`Whisperio Socket IO listening to port ${PORT}`);
});

module.exports = router;
