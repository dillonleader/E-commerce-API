const app = require("express").Router()
const superagent = require('superagent')

app.get('/:product_id', (req, res) => {
	superagent.get("https://mapi.vip.com/vips-mobile/rest/shopping/wap/product/detail/v5",{
		app_name:'shop_wap',
		app_version:4.0,
		api_key:'8cec5243ade04ed3a02c5972bcda0d3f',
		mobile_platform:2,
		source_app:'yd_wap',
		warehouse:'VIP_CD',
		fdc_area_id:'106101104',
		province_id:106101,
		mars_cid:'1592819317289_6ed523b65db50cb136cad078f4a91748',
		mobile_channel:'mobiles-||',
		standby_id:'nature',
		brandId:0,
		productId:req.params.product_id,
		act:'intro',
		price_fields:'vipshopPrice,saleSavePrice,specialPrice,salePriceTips,vipDiscount,priceIconURL,priceIconMsg,min_vipshop_price, max_vipshop_price,max_market_price, min_market_price ,promotion_price_type,promotion_price,promotion_price_suff,promotion_price_tips',
		haitao_description_fields:'descri_image,beauty_descri_image,text,mobile_descri_image,mobile_prompt_image',
		is_multicolor:1,
		is_get_TUV:1,
		kfVersion:1,
		device:3,
		priceScene:'normal',
		functions:'panelView,product_comment,sku_price,active_price,brand_store_info,luxury_info,newBrandLogo,reduced_point_desc,wh_transfer,hideOnlySize,showReputation,atmospherePicture,haitaoFinanceVip,banInfo,extraDetailImages,vendorQa',
		is_get_pms_tips:1,
		highlightBgImgVer:1,
		commitmentVer:2,
		propsVer:1,
		supportSquare:1,
		longTitleVer:2,
		_:1593657612,
		
	}).
	end((err,data) => {
		if(data){
			let datas  = data.text
			// datas = datas.substr(datas.indexOf('{'))
			// datas = datas.substr(0,datas.lastIndexOf(')'))
			res.end(datas)
			// console.log(datas)
		}else{
			console.log(err)
		}
	})
})

module.exports = app;