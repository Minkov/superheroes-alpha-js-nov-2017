const express = require('express');

const data = require('./data');

const config = require('./config');

const app = express();

require('./config/express').init(app);
require('./config/auth').init(app, data);
require('./routes').init(app, data);

app.listen(config.port);
