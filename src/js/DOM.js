'use strict';
let DOM = {};
let cardFrame = document.getElementById('card-frame');

function writeToDOM(data, id) {
	let productsArr = data.products.products,
	typesArr = data.types.types,
	categoriesArr = data.categories.categories;
	// STATUS:  data is loading into new object
	// figure out how to match ids from one object to id of another
	//to rpint category and type names


}

DOM.loadData = (data, id)=> {
	writeToDOM(data, id);
};



module.exports = DOM;