'use strict';
let DOM = {};
let cardFrame = document.getElementById('card-frame');

function writeToDOM(data, id) {
	//simplify object keys
	let productsObj = data.products.products,
	typesObj = data.types.types,
	categoriesObj = data.categories.categories,
	//create arrays to hold data for each product
	productsArr = [], descriptionsArr = [], typesArr = [],
	categoriesArr = [];
	//create containers to write data to the DOM, clear pre-existing data
	let content = '';
	let contentDiv = document.createElement('div');
	cardFrame.innerHTML = '';

	//create arrays for name, type, category, and description of each item
	productsObj.forEach((product) => {
		for (var key in product) {
			if (product[key].id == id){
				productsArr.push(product[key].name);
				typesArr.push(typesObj[product[key].type].name);
				categoriesArr.push(categoriesObj[product[key].id].name);
				descriptionsArr.push(product[key].description);
			}
		}
	});
	//create HTML for each product`
	for (let i = 0; i < productsArr.length; i++) {
		content += `
				<div class="col-sm-3 card">
				<p><strong>${productsArr[i]}</strong></p>
				<p>${typesArr[i]}</p>
				<p>${categoriesArr[i]}</p>
				<p>${descriptionsArr[i]}</p>
				</div>
		`;
	}
	//append HTML content to card Frame
	contentDiv.innerHTML = content;
	cardFrame.appendChild(contentDiv);
}

//loadData passes data to writeToDOM function
DOM.loadData = (data, id)=> {
	writeToDOM(data, id);
};

module.exports = DOM;