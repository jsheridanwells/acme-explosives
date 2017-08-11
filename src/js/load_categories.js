'use strict';
let Categories = {};

Categories.loadData = function () {
	return new Promise((resolve, reject)=>{
		$.ajax({
			url: './json/categories.json'
		}).done(function(data){
			resolve(data);
		}).fail(function(xhr, status, error){
			reject(error);
		});
	});
};

module.exports = Categories;