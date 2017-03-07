'use strict';


angular.module('ecommerceApp').directive('headerPage', function(){
	return{
		templateUrl: 'templates/headerPage.html',
		controller: 'productCtrl'
	}
})