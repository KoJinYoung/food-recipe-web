
var fs =  require('fs');
var express = require('express');
var router = express.Router();


var app = express();

//express가 메인 자바스크립트파일로부터 데이터를 가져올 수 있다.

module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {

  //res.sendfile( __base+'views/index');
  res.render('index', { title: '인자값 전달 시도 성공',fuck : '\n이제 힘내서 열심히 하장.' });

});


router.get('/rule',function(req,res,next){
  res.render('join-rule',{});
  res.redirect('/',{});
});

router.get('/inform',function(req,res,next){
  res.render('join-finish',{ name : 'test'});
});
router.get('/List',function(req,res,next){
  res.render('List',{});
});
//app.post('/login',Login2);



