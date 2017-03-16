'use strict';
/*

Directive for the pagining part 
	name: pagination
	controller: productCtrl in main.js
	template pagination.html

*/
var angular = require('angular');

angular.module('ecommerceApp').directive('pagination', function(){
	return{
		templateUrl: 'templates/pagination.html',
		controller: 'productCtrl'
	}
})