angular
    .module('workshop')
    .factory('APIService', apiFactory);

function apiFactory($http) { 
	return {
		getTopGames: function(){
			return $http.get("https://api.twitch.tv/kraken/games/top");
		},
		getSearchGames: function(query){
			return $http.get("https://api.twitch.tv/kraken/search/games?q="+ query +"&type=suggest");
		}
	};
}