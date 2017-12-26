var express = require('express');
var mongodb=require('mongodb');
var router = express.Router();
var mongoCt=mongodb.MongoClient;

/* GET users listing. */
router.get('/', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin',req.headers.origin); //k跨域
  res.setHeader('Access-Control-Allow-Credentials',true);  //cookie请求头
  //console.log(req.session);
  if(!req.session.username){
    res.send({err:1,msg:'未登录'});
  }else{
    mongoCt.connect("mongodb://127.0.0.1:27017/react-mamachufang",(err,db)=>{
      let user=db.collection('user');
      user.find({uname:`${req.session.username}`}).toArray((err,result)=>{
        if(!err){
          if(result.length!=0){
            //console.log(result);
            res.send({err:0,msg:result[0] });
          }else{
            res.send({err:1,msg:'用户名不存在'});
          }
        }else{
          res.send({err:2,msg:'访问数据库错误'});
        }
      })
    })
  }

});

module.exports = router;

