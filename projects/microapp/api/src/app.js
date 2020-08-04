const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const { checkAuth } = require('./middlewares');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/users', checkAuth, usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
	res.status(err.status || 500).json({ msg: err.message });
});

module.exports = app;
