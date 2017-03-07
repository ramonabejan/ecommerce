'use strict';

angular.module("ecommerceApp").service('dataService',function($http){

	this.getProducts = function(callback){
		$http.get("mock/products").then(callback);
	}


})