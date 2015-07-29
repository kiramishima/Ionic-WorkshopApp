angular
    .module('workshop')
    .controller('HomeController', HomeController);

function HomeController($scope, APIService) { 
	APIService.getTopGames().then(function(response){
		$scope.games = response.data.top;
	})
	.catch(function(err){
		console.log(err);
	})
	.finally(function(){
		console.log("Finalizo el Callback");
	});

	$scope.onSearch = function(){
		navigator.notification.prompt(
		    'Buscar',  // message
		    doSearch,                  // callback to invoke
		    'Workshop',            // title
		    ['Ok','Exit'],             // buttonLabels
		    'League Of Legends'                 // defaultText
		);
	};

	$scope.doRefresh = function() {
	    $scope.games.unshift({name: 'Incoming Games ' + Date.now()})

	    APIService.getTopGames().then(function(response){
			$scope.games = response.data.top;
		})
		.catch(function(err){
			console.log(err);
		})
		.finally(function(){
			$scope.$broadcast('scroll.refreshComplete');
		});
	    
	    $scope.$apply()
	};
}

function doSearch(results) {
    var query = results.input1;
    if(query != ""){
    	$state.go("search", { query: query });
    }
}