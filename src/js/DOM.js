'use strict';
let DOM = {};

DOM.loadCards = (categories, types, products) => {
	products.forEach((product)=>{
		let newDiv = document.createElement('div');
		newDiv.className = 'col-sm-4 card';
		let content = `
			<p><strong>PRODUCT</strong></p>
			<p>TYPE</p>
			<p>CATEGORY</p>
			<p><DESCRIPTION</p>
		`;
		newDiv.innerHTML = content;
		document.getElement.ById('card-frame').appendChild(newDiv);
	});
};

module.exports = DOM;