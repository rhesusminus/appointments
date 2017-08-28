const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();

app.use(bodyParser.json({ type: '*/*' }));

router(app);

// TODO: somekinda error handling would be nice


module.exports = app;
