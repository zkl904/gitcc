var express = require('express');
var router = express.Router();
let mongodb = require('mongodb');  //mongodb客户端包
let mongoCt = mongodb.MongoClient;  // 使用mongod客户端

/* GET users listing. */
router.get('/', function(req, res) {
  // res.render('index', { title: 'Express 脚手架(cli)abc123' });
  //兜库
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  //res.setHeader('Access-Control-Allow-Credentials', true);
  //mongoCt.connect('协议':ip地址/端口/库名,回调)
  mongoCt.connect('mongodb://127.0.0.1:27017/react-mamachufang',(err,db)=>{

    let detail1 = db.collection('detail1');  //兜home库

    detail1.find({}).toArray((err,result)=>{
      console.log(result);

      res.send(result);//反数据给前端
    });
  });
});

module.exports = router;