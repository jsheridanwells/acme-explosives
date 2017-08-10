'use strict';

let Products = {};

Products.loadData = () => {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', '../../json/products.json');
	xhr.send();

	xhr.addEventListener('load', function () {
		let data = JSON.parse(xhr.responseText);
		console.log('products data is now', data);
		return data;
	});
};

module.exports = Products;