var express = require('express');
var router = express.Router();
let mongodb = require('mongodb');
let mongoCt = mongodb.MongoClient;

/* GET users listing. */
router.get('/', function(req, res) {
  // res.render('index', { title: 'Express 脚手架(cli)abc123' });
  //兜库
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  //res.setHeader('Access-Control-Allow-Credentials', true);
  mongoCt.connect('mongodb://127.0.0.1:27017/react-mamachufang',(err,db)=>{

    let content = db.collection('content');  //兜home库

    content.find({}).toArray((err,result)=>{
      console.log(result);

      res.send(result);//反数据给前端
    });

  });

});

module.exports = router;