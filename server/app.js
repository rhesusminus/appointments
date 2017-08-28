const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const router = require('./router');
const db = require('./db/db');

const app = express();

app.use(logger('combined'));
app.use(bodyParser.json({ type: '*/*' }));

router(app);

// TODO: somekinda error handling would be nice


module.exports = app;
