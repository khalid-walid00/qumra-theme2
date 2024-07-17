var createError = require('http-errors');
var express = require('express');
var app = express();
const cookieParser = require("cookie-parser");
const logger = require("morgan");
var indexRouter = require('./routes/index');
const nunjucks = require('nunjucks');
const path = require('path')

app.use(logger('dev'));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.set('view engine', 'njk');

app.use(express.static(path.join(__dirname, 'views', 'assets')))


nunjucks.configure(path.join(__dirname, 'views'), {
    autoescape: true,
    express: app
});


app.use('/', indexRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  console.log(err.message)
  // set locals, only providing error in development
  res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.send(err.message).status(500);
  // res.render('error');
});

module.exports = app;
