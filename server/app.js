const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const cors = require('cors');

const app = express();

app.use(bodyParser.json({ type: '*/*' }));
app.use(morgan('combined'));
app.use(cors());

router(app);

// TODO: somekinda error handling would be nice


module.exports = app;
