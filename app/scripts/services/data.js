'use strict';

//A service for getting the data from mock.products json file

var angular = require('angular');

dataService.$inject = ['$http'];

angular.module("ecommerceApp")
	   .service('dataService',dataService);

function dataService($http){

	this.getProducts = function(callback){
		$http.get("mock/products").then(callback);
	}


}


require('../directives/headerPage.js');

require('../directives/pagination.js');


require('../directives/products.js');