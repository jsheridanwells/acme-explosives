'use strict';
let Categories = {};

Categories.loadData = () => {
	return new Promise(function(resolve, reject){
		let xhr = new XMLHttpRequest();
		xhr.open('GET', '../../json/categories.json');
		xhr.send();

		xhr.addEventListener('load', function() {
			let data = JSON.parse(xhr.responseText);
			resolve(data);
		});
	});
};

module.exports = Categories;