//// 필요한 모듈 import
//var express    = require("express");
//var morgan       = require("morgan");
//var bodyParser = require("body-parser");
//var jwt             = require("jsonwebtoken");
//var mongoose  = require("mongoose");
//var app           = express();
//var ejs = require('ejs');
//var path = require('path');
//global.__base = __dirname + '/';
//var router = express.Router();
//
////var login = require('./login');
////path.join(__dirname, ')
//// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
////var User   = require('./views/login');
//
//// DB
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
//app.use(morgan("dev")); // 모든 요청을 console에 기록
////app.use(methodOverride()); // DELETE, PUT method 사용
//app.use(function(req, res, next) {
//  //모든 도메인의 요청을 허용하지 않으면 웹브라우저에서 CORS 에러를 발생시킨다.
//  res.setHeader('Access-Control-Allow-Origin', '*');
//  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
//  next();
//});
//
////router.post('/',function(req,res,next){
////  console.log('req.body 콘솔 로그를 변경해 보았습니다~: '+req.body);
////  res.json(req.body);
////});
//
//
//
//
//// 신규가입
//// 계정과 토큰을 생성한다.
//app.post('/signin', function(req, res) {
//        User.findOne({email: req.body.email, password: req.body.password}, function(err, user) {
//          if (err) {
//            res.json({
//        type: false,
//        data: "Error occured: " + err
//      });
//    } else {
//      if (user) {
//        res.json({
//          type: false,
//          data: "User already exists!"
//        });
//      } else {
//        var userModel = new User();
//        userModel.email = req.body.email;
//        userModel.password = req.body.password;
//        userModel.save(function(err, user) { // DB 저장 완료되면 콜백 함수 호출
//          user.token = jwt.sign(user, process.env.JWT_SECRET); // user 정보로부터 토큰 생성
//          user.save(function(err, user1) {
//            res.json({
//              type: true,
//              data: user1,
//              token: user1.token
//            });
//          });
//        })
//      }
//    }
//  });
//});
////
////// 나의 정보
////// 토큰 검사 후 계정 정보 반환
////// 토큰 추출하기 위해 ensureAuthorized 먼저 실행
////app.get('/me', ensureAuthorized, function(req, res) {
////  User.findOne({token: req.token}, function(err, user) {
////    if (err) {
////      res.json({
////        type: false,
////        data: "Error occured: " + err
////      });
////    } else {
////      res.json({
////        type: true,
////        data: user
////      });
////    }
////  });
////});
////
////// 요청 헤더 내의 authorization 헤더에서 토큰 추출
////// 토큰이 존재하면, 토큰을 req.token에 할당
////function ensureAuthorized(req, res, next) {
////  var bearerToken;
////  var bearerHeader = req.headers["authorization"];
////  if (typeof bearerHeader !== 'undefined') {
////    var bearer = bearerHeader.split(" ");
////    bearerToken = bearer[1];
////    req.token = bearerToken;
////    next(); // 다음 콜백함수 진행
////  } else {
////    res.send(403);
////  }
////}
////
////process.on('uncaughtException', function(err) {
////  console.log(err);
////});
//module.exports = router;

var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var secretKey = 'sexme';
//var RecipeAPI = require('./api/RecipeAPI');
//var UserAPI = require('./api/UserAPI');
//var RecipeAPIHandler = require('./Handler/RecipeAPIHandler');
//var UserAPIHandler = require('./Handler/UserAPIHandler');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', {});
});

router.post('/',function(req,res,next){
  console.log('req.body 콘솔 로그를 변경해 보았습니다~: '+req.body.);
  res.json(req.body);
});

module.exports = router;

