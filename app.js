var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
////////라우팅 되는 파일들의 경로를 지정을 해주어야 한다.!!
var routes = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var test = require('./routes/test');

////// ejs view 파일들을 사용을 한다.
var ejs = require('ejs');

global.__base = __dirname + '/';

var app = express();
//path.join(__dirname, ')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.engine('html',ejs.renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//this is for using static file for css, and images
app.use("/public/stylesheets",express.static(__dirname + "/public/stylesheets"));
app.use("/public/images",express.static(__dirname + "/public/images"));
//
//this is for route html file for each URL
app.use('/', routes);
app.use('/users', users);
app.use('/login', login);
app.use('/test', test);

/*  login이라는 모듈이 없기때문에 사용이 불가능하다.
app.get('/login',function(request, response){
  fs.readfile(login,function(req,res){
    response.send(data.toString());

  });

});


*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
