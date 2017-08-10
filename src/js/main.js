'use strict';

let Categories = require('./load_categories.js');
let Types = require('./load_types.js');
let Products = require('./load_products.js');

Categories.loadData()
	.then((resolveData) => {
		console.log("working");
		Types.loadData();
	})
	.then(() => {
		Products.loadData();
		console.log("still working");
	},
	(reject) => {
		console.log("xhr error");
	});

// 1. user selects category
// 1.1 load categories.json
// 1.2 check for cateogry id
// 1.3 call products.json

// 2. products.json is loaded
// 2.1 write name to page
// 2.2 write description to page
// 2.3 call types.json

// 3.1 types.json is loaded
// 3.2 check type id in products
// 3.3 find type ID in types
// 3.4 write name to page
