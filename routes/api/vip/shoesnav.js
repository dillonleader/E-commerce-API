const app = require("express").Router()
const superagent = require('superagent')
app.get("/", (req, res) => {
	superagent.get('https://h5.vip.com/dp/getDataPC',{
		callback: "jQuery110209372842205625593_1592729930342",
		pageId: 100020632,
		componentId: "",
		pageSize: 30,
		abtId: 7885,
		warehouse: "VIP_CD",
		fdc_area_id: "",
		area_id: 106101104,
		app_name: "shop_pc",
		app_version: 1.0,
		api_key: "70f71280d5d547b2a7bb370a529aeea1",
		mars_cid: "1592726285780_46d5825c5ce9c11595d39b462a5e2be6",
		tagId: 53116806,
		serviceType: 4,
		total: 20,
		dataSourceScene: "MST_RULD_ID_RECOMMEND",
		goodsExtendParams: { "countryFlagStyle":"1"},
		_: 1592729930343,
		uid: 394813422,
	}).end((err, data) => {
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