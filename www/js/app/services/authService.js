angular
    .module('workshop')
    .factory('AuthService', authFactory);

function authFactory($http) { 
	return {
		login: function(user){
			if(user.username != "" && user.password){
				return true;
			}else{
				return false;
			}
		}
	};
}