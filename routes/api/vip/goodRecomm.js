const app = require("express").Router()
const superagent = require('superagent')
app.get('/', (req, res) => {
	superagent.get('https://mapi.vip.com/storey',{
		callback: 'jQuery110208602497457002738_1592916176169',
		api_key: '70f71280d5d547b2a7bb370a529aeea1',
		app_name: 'shop_pc',
		app_version: 7.13,
		fdc_area_id: 106101104,
		is_sku_price: 1,
		mars_cid: '1592819317289_6ed523b65db50cb136cad078f4a91748',
		mobile_platform: 1,
		page_id: 100020620,
		code: 'pc-cainixihuan1:2',
		source_app: '',
		standby_id: 'ng00010v:al80ssgp:37u8zn0w:ng00010p',
		timestamp: 1592916175,
		warehouse: 'VIP_CD',
		channel_id: 1,
		tsift: 1,
		template_code: 226045625773333929,
		area_id: 106101104,
		client: '',
		tag: '',
		_: 1592916176174,
		uid: 394813422,
	}).end((err, data) => {
		if(data){
			let datas  = data.text
			datas = datas.substr(datas.indexOf('{'))
			datas = datas.substr(0,datas.lastIndexOf(')'))
			res.end(datas)
			// console.log(data.text)
			res.end(datas)
		}else{
			console.log(err)
		}
	})
})

module.exports = app;