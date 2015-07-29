angular
    .module('workshop')
    .controller('SearchController', SearchController);

function SearchController($scope, $stateParams, APIService) { 
	var query = $stateParams.query
	APIService.getSearchGames(query).then(function(response){
		$scope.games = response.data.games;
	})
	.catch(function(err){
		console.log(err);
	})
	.finally(function(){
		console.log("Finalizo el Callback");
	});
}