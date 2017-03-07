'use strict';

/*

Directive for the products list -----ul  "product-list"
html: templates/products.html
controller: controllers/main.js -- productCtrl

*/

angular.module('ecommerceApp').directive('productsList', function(){
	return{
		templateUrl: 'templates/products.html',
		controller: 'productCtrl'
	}
})