'use strict';

/*Directive for the header part: wishlist + cart 
	name: headerPage
	controller: productCtrl in main.js
	template headerPage.html
	*/
var angular = require('angular');

angular.module('ecommerceApp').directive('headerPage', function(){
	return{
		templateUrl: 'templates/headerPage.html',
		controller: 'productCtrl'
	}
})