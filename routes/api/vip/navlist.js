const app = require("express").Router()
const superagent = require('superagent')
app.get("/:ruleId", (req, res) => {
	superagent.get('https://h5.vip.com/dp/getDataPC',{
		callback: "jQuery110206871472143007438_1592731181644",
		pageId: 100020632,
		componentId: "",
		pageSize: 50,
		abtId: 3788,
		warehouse: "VIP_CD",
		fdc_area_id: "",
		area_id: 106101104,
		app_name: "shop_pc",
		app_version: 1.0,
		api_key: "70f71280d5d547b2a7bb370a529aeea1",
		mars_cid: "1592726285780_46d5825c5ce9c11595d39b462a5e2be6",
		serviceType: 1,
		total: "",
		goodsQueryFields: "goodsSellTag,goodsStockTag,query4GoodsFav,query4Comment,goodsCorner,goodsFallingTag",
		topSalesList: "",
		is_front: 1,
		dataSourceScene: "MST_RULE_PRODUCT_RANK",
		ruleId: req.params.ruleId,
		_: 1592731181647,
		uid: 394813422,
	}).end((err, data) => {
		if(data){
			let datas  = data.text
			datas = datas.substr(datas.indexOf('{'))
			datas = datas.substr(0,datas.lastIndexOf(')'))
			res.end(datas)
		}else{
			console.log(err)
		}
	})
})
module.exports = app;