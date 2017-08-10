var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Goods = require('../models/goods');

//链接数据库
mongoose.connect('mongodb://127.0.0.1/shop')
//当数据库链接成功的时候出发
mongoose.connection.on('connected', function(){
	console.log("Mongodb connected success");
})

//当数据库链接失败的时候出发
mongoose.connection.on('error',function(){
	console.log("Mongodb connected fail");
})


//当数据库关闭链接的时候出发
mongoose.connection.on('disconnected',function(){
	console.log("Mongodb connected disconnected");
})

router.get("/list",function(req,res,nest){
	let goodModel = Goods.find({},function(err, docs){
		console.log(docs);
		res.json({
			status:'0',
			result:docs
		})
	})
})

module.exports = router;