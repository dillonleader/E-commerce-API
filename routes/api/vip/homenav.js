const app = require("express").Router()
const fs = require('fs')
const path = require('path')
app.get('/',(req, res) => {
	fs.readFile(path.join(__dirname,'../../../data/nav.json'),'utf-8',(err, data) => {
		if(data){
			res.end(data)
		}else{
			console.log(err)
		}
	})
})

module.exports = app;