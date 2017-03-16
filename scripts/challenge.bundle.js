webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
The main Controller of the application -name: productCtrl

*/

var angular = __webpack_require__(0);
__webpack_require__(18);

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
    	return __webpack_require__(19)("./" + image);        
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




/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "styles/font/Lato-Bold.ttf";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "styles/font/Lato-BoldItalic.ttf";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "styles/font/Lato-Italic.ttf";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "styles/font/Lato-Regular.ttf";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "styles/font/OFL.txt";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "styles/images/img01.jpg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "styles/images/shopping_cart_example.png";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "styles/svg/arrow-left.svg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "styles/svg/arrow-right.svg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "styles/svg/bag.svg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "styles/svg/wishlist.svg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*Directive for the header part: wishlist + cart 
	name: headerPage
	controller: productCtrl in main.js
	template headerPage.html
	*/
var angular = __webpack_require__(0);

angular.module('ecommerceApp').directive('headerPage', function(){
	return{
		templateUrl: 'templates/headerPage.html',
		controller: 'productCtrl'
	}
})

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*

Directive for the pagining part 
	name: pagination
	controller: productCtrl in main.js
	template pagination.html

*/
var angular = __webpack_require__(0);

angular.module('ecommerceApp').directive('pagination', function(){
	return{
		templateUrl: 'templates/pagination.html',
		controller: 'productCtrl'
	}
})

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*

Directive for the products list -----ul  "product-list"
html: templates/products.html
controller: controllers/main.js -- productCtrl

*/

var angular = __webpack_require__(0);

angular.module('ecommerceApp').directive('productsList', function(){
	return{
		templateUrl: 'templates/products.html',
		controller: 'productCtrl'
	}
})

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//A service for getting the data from mock.products json file

var angular = __webpack_require__(0);

dataService.$inject = ['$http'];

angular.module("ecommerceApp")
	   .service('dataService',dataService);

function dataService($http){

	this.getProducts = function(callback){
		$http.get("mock/products").then(callback);
	}


}


__webpack_require__(15);

__webpack_require__(16);


__webpack_require__(17);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./font/Lato-Bold.ttf": 4,
	"./font/Lato-BoldItalic.ttf": 5,
	"./font/Lato-Italic.ttf": 6,
	"./font/Lato-Regular.ttf": 7,
	"./font/OFL.txt": 8,
	"./images/img01.jpg": 9,
	"./images/shopping_cart_example.png": 10,
	"./main.css": 1,
	"./svg/arrow-left.svg": 11,
	"./svg/arrow-right.svg": 12,
	"./svg/bag.svg": 13,
	"./svg/wishlist.svg": 14
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 19;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//The entry point --initialize ecommerce angular module

var angular = __webpack_require__(0);

angular.module("ecommerceApp", [])

__webpack_require__(2);

__webpack_require__(1);


/***/ })
],[20]);