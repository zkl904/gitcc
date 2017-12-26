var express = require('express');
var router = express.Router();
let mongodb = require('mongodb');
let mongoCt = mongodb.MongoClient;

/* GET users listing. */
//登录
router.get('/login', function(req, res,next) {
  res.setHeader('Access-Control-Allow-Origin',req.headers.origin); //k跨域
  res.setHeader('Access-Control-Allow-Credentials',true);  //cookie请求头

  mongoCt.connect('mongodb://127.0.0.1:27017/react-mamachufang',(err,db)=>{
    user = db.collection('user')
    user.find({uname:`${req.query.username}`}).toArray((err,data)=>{
      console.log(data);
      if(!err){
        if( data.length ){
          if(data[0].upwd == req.query.password){
            // res.send('..')
            req.session.username=req.query.username;
            res.send({error:0,msg:'恭喜登录成功',shoplist:data[0].shoplist});

          }else{
            res.send({error:1,msg:'密码有误'})
          }
        }else{
          res.send({error:1,msg:'用户名不存在'})
        }
      }else{
        res.send({error:2,msg:'访问数据库出错!404'});
      }
    })
  })


});

router.get('/reg', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);

  mongoCt.connect('mongodb://127.0.0.1:27017/react-mamachufang', (err, db)=> {
    user = db.collection('user')
    user.find({uname:`${req.query.username}`}).toArray((err, data)=> {
      if (!err) {
        if (data.length) {  //有数据,说明重名了
          res.send({error: 1, msg: '用户名已有'});
        } else {   //正常的情况
          user.insert({uname: `${req.query.username}`, upwd: `${req.query.password}`, shoplist: '[]'}, (err, data)=> {
            if (!err) {
              res.send({'error': 0, 'msg': '注册成功'});
            } else {
              res.send({'error': 1, 'msg': '访问数据库出错!404'});
            }
          })
        }
      } else {
        res.send({error: 2, msg: '访问数据库出错!404'});
      }
    })
  })
});







//router.get('/reg', function(req, res, next) {
//  res.setHeader('Access-Control-Allow-Origin',req.headers.origin);
//
//  mongoCt.connect('mongodb://127.0.0.1:27017/2017-10-30',(err,db)=>{
//    user = db.collection('user')
//    user.insert({uname:`${req.query.username}`,upwd:`${req.query.password}`,shoplist:'[]'},(err,data)=>{
//      if(!err){
//        res.send({'error':0,'msg':'注册成功'});
//      }else{
//        res.send({'error':1,'msg':'访问数据库出错!404'});
//      }
//    })
//  })
//
//})

module.exports = router;
