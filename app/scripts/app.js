(function(){

	var app = angular.module('store',[]);

	app.controller('StoreController',function(){
		this.products = gems;

	});

	app.controller("PanelController",function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab =setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};

	});

	var gems = 
	[ 
		{
		name: 'Black and white dress',
		price: 2.95,
		description:'description here',
		canPurchase: true,
		soldOut: false,
		images: [	
			{
			full: 'images/item1.png',
			thumb: 'images/item1.png'
			},
			
			
				]
		},

		{
		name: 'blue dress',
		price: 5.55,
		description:'description here',
		canPurchase: true,
		soldOut: false,
		images:[
		{
			full: 'images/item2.png',
			thumb: 'images/item2.png'
			},

		]
		},

		{
		name: 'flower dress',
		price: 10,
		description:'description here',
		canPurchase: true,
		soldOut: false,
		images:[
		{
			full: 'images/item3.png',
			thumb: 'images/item3.png'
			},
		]
		}


	]

})();
