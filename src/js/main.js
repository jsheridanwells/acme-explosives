'use strict';
let Categories = require('./load_categories.js');
let Types = require('./load_types.js');
let Products = require('./load_products.js');
let DOM = require('./DOM.js');

let _data = {};

$('.selector').click(function(){
	let selectType = this.id;
	Categories.loadData()
	.then(function(data1){
		_data.categories = data1;
		return Types.loadData(_data);
	})
	.then(function(data2){
		_data.types = data2;
		return Products.loadData(_data);
	}).then(function(data3){
		_data.products = data3;
		DOM.loadData(_data);
	});
});
