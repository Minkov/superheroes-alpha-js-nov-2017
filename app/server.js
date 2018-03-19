const express = require('express');

const data = require('./data');

const config = require('./config');

const app = express();

require('./config/express').init(app);
require('./config/auth').init(app, data);

app.use((req, res, next) => {
    res.locals.user = req.user || null;
    return next();
});

require('./routes').init(app, data);

app.listen(config.port);
