const app = require("express").Router()
const superagent = require('superagent')
app.get("/", (req, res) => {
	superagent.get('https://pcapi.vip.com/cmc/index.php',{
		callback: "shopAds",
		type: "ADSR8G8W",
		warehouse: "VIP_CD",
		areaid: 106101,
		preview: 0,
		date_from: "",
		time_from: "",
		user_class: "",
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