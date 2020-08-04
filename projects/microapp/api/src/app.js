const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const { checkAuth } = require('./middlewares');
const { indexRouter, usersRouter } = require("./routes");

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/api', indexRouter);
app.use('/api/users', checkAuth, usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
	res.status(err.status || 500).json({ msg: err.message });
});

module.exports = app;
