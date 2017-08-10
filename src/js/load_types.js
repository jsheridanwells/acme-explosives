'use strict';

let Types = {};

Types.loadData = ()=> {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', '../../json/types.json');
	xhr.send();

	xhr.addEventListener('load', function () {
		let data = JSON.parse(xhr.responseText);
		console.log("types data is now ", data);
		return data;
	});
};

module.exports = Types;