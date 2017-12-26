var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cookieSession=require('cookie-session');  //需要引入cookie

var index = require('./routes/index');
var users = require('./routes/users');
var detail=require('./routes/detail');
var home=require('./routes/home');
var speak =require('./routes/speak')
var content = require('./routes/content');
var myuser =require('./routes/myuser');
var shopcar=require('./routes/shopcar');
var loginout=require('./routes/loginout');

var app = express();
var cors =require('cors'); //引入中间插件cors,目的是为了保持跨域连接一直起效

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieSession({  //cookie的配置
  keys:['aa','bb','cc','dd'],
  name:'session',
  maxAge:60*60*1000*24
}));


app.use('/', index);
app.use('/users', users);
app.use('/detail',detail);
app.use('/home',home);
app.use('/speak',speak);
app.use('/content',content);
app.use('/myuser',myuser);
app.use('/shopcar',shopcar);
app.use('/loginout',loginout);


//配置cors中间件
app.use(cors({
  'credentials':true,  //配置Access-Control-Allow-Credentials的 CORS头。设置为true传递标题，否则将被忽略。
  'origin':['http://localhost:8001'],  //请求源
  // 'credentials':true,   // 前端携带请求头
  'methods':"GET,HEAD,PUT,PATCH,POST,DELETE", //被允许的提交方式
  // 'allowedHeaders':['Content-type','Authorization'] //被允许的post方式的请求头
  "preflightContinue": false,//将CORS预检响应传递给下一个处理程序。
  "optionsSuccessStatus": 204  //OPTIONS由于一些传统的浏览器（IE11，各种智能电视）窒息，提供一个用于成功请求的状态代码204。
}))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
