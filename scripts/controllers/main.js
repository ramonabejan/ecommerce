'use strict';
angular.module('ecommerceApp').controller('productCtrl', function($scope,dataService) {



	//initialize the products scope variable with the json response of the dataService.getProducts
	dataService.getProducts(function(response){
		$scope.products = response.data;
	})

	//cart items
	$scope.cart = [];

	//wishList items
	$scope.wish=[];

	//add to cart function
	$scope.addToCart = function(item){
		$scope.cart.push(item);
		console.log($scope.cart);
	}

	//add to wishList function

	$scope.addToWish = function(item){
		$scope.wish.push(item);
		console.log($scope.wish);
	}

	
})