'use strict';

let Types = {};

Types.loadData = function () {
	return new Promise((resolve, reject)=>{
		$.ajax({
			url: './json/types.json'
		}).done(function(data){
			resolve(data);
		}).fail(function(xhr, status, error){
			reject(error);
		});
	});
};

module.exports = Types;