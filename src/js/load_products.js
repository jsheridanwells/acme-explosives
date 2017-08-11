'use strict';

let Products = {};

Products.loadData = function () {
	return new Promise((resolve, reject)=>{
		$.ajax({
			url: './json/products.json'
		}).done(function(data){
			resolve(data);
		}).fail(function(xhr, status, error){
			reject(error);
		});
	});
};

module.exports = Products;