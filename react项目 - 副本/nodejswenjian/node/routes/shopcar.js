var express = require('express');
var router = express.Router();
let mongodb = require('mongodb');
let mongoCt = mongodb.MongoClient;

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin',req.headers.origin);
	mongoCt.connect('mongodb://127.0.0.1:27017/react-mamachufang',(err,db)=>{
	  	user = db.collection('user')
	  	console.log( req.query.shoplist )
	  	user.update({uname:`${req.query.username}`},{$set:{shoplist:req.query.shoplist}},(err,data)=>{
	  		if(!err){
	  			res.send({'errpr':0,'msg':'修改成功'});
	  		}else{
	  			res.send({'errpr':1,'msg':'访问数据库出错!'});
	  		}
	  	})
	})
});

module.exports = router;
