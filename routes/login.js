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
    console.log('req.body 콘솔 로그를 변경해 보았습니다~: '+req.body);
    res.json(req.body);
});

module.exports = router;
