const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const superagent = require('superagent')
const router = express.Router()
let cors = require('cors')
app.use(cors())
app.all('*', function(req, res, next) {
	res.setHeader('Content-Type','text/plain;charset=utf-8');
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-type');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
    res.header('Access-Control-Max-Age',1728000);//预请求缓存20天
    next();  
});

app.get('/', (req,res) => {
	res.end('Server is success')
})

let keyword = require('./routes/api/vip/keyword')
let homenav = require('./routes/api/vip/homenav')
let indexPage = require('./routes/api/vip/indexPage')
let banner = require('./routes/api/vip/banner')
let shoesnav = require('./routes/api/vip/shoesnav')
let navlist = require('./routes/api/vip/navlist')
let goodRecomm = require('./routes/api/vip/goodRecomm')
let brand = require('./routes/api/vip/brand')
let elevator = require('./routes/api/vip/elevator')
let detailsPage = require('./routes/api/vip/detailsPage')


app.use('/api/vip/keyword',keyword) // 搜索下关键字
app.use('/api/vip/homenav',homenav) // 商品导航分类列表
app.use('/api/vip/indexPage',indexPage) // 主页商品列表
app.use('/api/vip/banner',banner) // 轮播图
app.use('/api/vip/shoesnav',shoesnav) // 精选专场导航
app.use('/api/vip/navlist',navlist) // 精选专场导航商品列表,一个参数 shoesnav 的 id
app.use('/api/vip/goodRecomm',goodRecomm) // 好物推荐
app.use('/api/vip/brand',brand) // 品牌特卖 每日早10 传入 pageSize 为页数
app.use('/api/vip/elevator',elevator) // 品牌特卖 -> 更多推荐传入 pageSize 为页数
app.use('/api/vip/detailsPage',detailsPage) // 详情页面 传入 product_id 
app.listen(80)