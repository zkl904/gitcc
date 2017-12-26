var express = require('express');
var mongodb=require('mongodb');
var router = express.Router();
var mongoCt=mongodb.MongoClient;

/* GET users listing. */
router.get('/', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin',req.headers.origin); //k跨域
  res.setHeader('Access-Control-Allow-Credentials',true);
  req.session=null;
  res.send({err:0,msg:'注销成功'});
});

module.exports = router;
