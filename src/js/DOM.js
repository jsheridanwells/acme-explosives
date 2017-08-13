'use strict';
let DOM = {};
let cardFrame = document.getElementById('card-frame');

function writeToDOM(data, id) {
	let productsObj = data.products.products,
	typesObj = data.types.types,
	categoriesObj = data.categories.categories,
	productsArr = [], descriptionsArr = [], typesArr = [],
	categoriesArr = [];
	let content = '';
	cardFrame.innerHTML = '';

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
	let contentDiv = document.createElement('div');
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
	contentDiv.innerHTML = content;
	cardFrame.appendChild(contentDiv);
}

DOM.loadData = (data, id)=> {
	writeToDOM(data, id);
};

module.exports = DOM;