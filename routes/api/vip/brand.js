const app = require("express").Router()
const superagent = require('superagent')
app.get('/:pageSize', (req, res) => {
	superagent.get('https://mapi.vip.com/vips-mobile/rest/lastsale/pc/elevator/list/recommended', {
		callback: 'jQuery110207310739658448879_1592898369973',
		api_key: '70f71280d5d547b2a7bb370a529aeea1',
		warehouse: 'VIP_CD',
		mars_cid: '1592819317289_6ed523b65db50cb136cad078f4a91748',
		app_name: 'shop_pc',
		app_version: 1.0,
		product_num: 4,
		mobile_platform: 'PC',
		first_page_size: req.params.pageSize,
		client: 'web',
		fdc_area_id: 104104101,
		platform: 2,
		is_front: 1,
		_: 1592898369974,
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