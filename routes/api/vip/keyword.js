const app = require("express").Router()
const superagent = require('superagent')
app.get('/', (req, res) => {
	superagent.get("https://h5.vip.com/dp/getDataPC",{
		callback: "jQuery110207652783767608746_1592703151838",
		pageId: 100019090,
		componentId: "",
		pageSize: 100,
		abtId: 2554,
		warehouse: "VIP_CD",
		fdc_area_id: "",
		area_id: 106101104,
		app_name: "shop_pc",
		app_version: "1.0",
		api_key: "70f71280d5d547b2a7bb370a529aeea1",
		mars_cid: "1587444396732_2989514052c9bd9fc7a37289334f2695",
		serviceType: 1,
		total: "",
		goodsQueryFields: "goodsSellTag,goodsStockTag,query4GoodsFav,query4Comment,goodsCorner,goodsFallingTag",
		topSalesList: "",
		is_front: 1,
		dataSourceScene: "MST_RULE_PRODUCT_RANK",
		ruleId: 53077182,
		_: 1592703151839,
		uid: 394813422,
	}).
	end((err,data) => {
		if(data){
			let datas  = data.text
			datas = datas.substr(datas.indexOf('{'))
			datas = datas.substr(0,datas.lastIndexOf(')'))
			res.end(datas)
			// console.log(datas)
		}else{
			console.log(err)
		}
	})
})

module.exports = app;