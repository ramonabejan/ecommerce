'use strict';
/*
The main Controller of the application -name: productCtrl

*/

var angular = require('angular');
require('../services/data.js');

productCtrl.$inject = ['$scope', 'dataService'];

angular.module('ecommerceApp')
	   .controller('productCtrl', productCtrl);

function productCtrl ($scope,dataService) {

	$scope.products=[];

	//cart items
	$scope.cart = [];

	//wishList items
	$scope.wish=[];

	$scope.totalPrice=0;

	//the current page
	$scope.currentPage=0;

	//number of products/page
	$scope.pageSize=6;

	//the total number of products
	$scope.numberOfProducts=0;

	$scope.numberOfPage=1;

	$scope.loadImage = function(image) {
    	return require( '../../../styles/' + image);        
	};


	//initialize the products scope variable with the json response of the dataService.getProducts
	dataService.getProducts(function(response){
		if(response !== undefined && response.data.length>0) {
			$scope.allProducts = response.data;
			$scope.numberOfProducts = response.data.length;
			$scope.products = response.data.slice($scope.currentPage,$scope.pageSize);
			$scope.numberOfPage=Math.ceil($scope.numberOfProducts/$scope.pageSize);
		}
	
	
	})


	//add to cart function
	$scope.addToCart = function(item){

		if(item.quantity !== undefined) {
			item.quantity++;
		}
		else{
			item.quantity=1;
		}

		
		if(item.priceDiscounted !== undefined) {
			$scope.totalPrice+= parseFloat(item.priceDiscounted);
			item.realPrice = parseFloat(item.priceDiscounted);
		}
		else{
			$scope.totalPrice += parseFloat(item.price);
			item.realPrice = parseFloat(item.price);
		}

		item.quantity = 1;
		item.toCart=true;
		$scope.cart.push(item);	
	
	}


	$scope.plusQty = function(item) {
		item.quantity++;
		//update total price
		$scope.totalPrice += item.realPrice;	

	}


	$scope.minusQty = function(item) {
		if(item.quantity>1) {
			item.quantity--;
			$scope.totalPrice -= item.realPrice;
		}		

	}

	$scope.removeFromBag= function(index){
		$scope.products[index].toCart=false;
		$scope.totalPrice -= $scope.products[index].realPrice*$scope.products[index].quantity;
		$scope.cart.splice( index, 1 );
		if($scope.cart.length==0) {
			$scope.totalPrice=0;
		}

	}

	//add to wishList function
	$scope.addToWish = function(item){
		$scope.wish.push(item);
		item.toWish=true;
		
	}


	//Paging: next,previous, go to page number
	$scope.goToPage = function(stringIndex) {
		if(stringIndex !== "..."){
			var currIndex = parseInt(stringIndex)-1;
			var start = currIndex * $scope.pageSize;
			var fin = (currIndex+1) * $scope.pageSize;	
			$scope.products=($scope.allProducts).slice(start,fin);	
			$scope.currentPage = currIndex;	
		}

	}

	//Pagining: generates an array with the page numbers with the pattern : 1...n-1 n n+1...numberOfPAges
	$scope.getFilteredPageNumber = function(current){
		var newArray = new Array();
		newArray.push(1);
		if(current>=3){
			newArray.push("...");
			newArray.push(current-1);
		}
		if(current>1 && current < $scope.numberOfPage){
			newArray.push(current);
		}
		if(current<=$scope.numberOfPage-2){
			newArray.push(current+1);
			newArray.push("...");
		}

		newArray.push($scope.numberOfPage);
		return newArray;
	}
	
}


