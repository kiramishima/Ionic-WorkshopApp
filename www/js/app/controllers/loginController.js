angular
    .module('workshop')
    .controller('LoginController', LoginController);

function LoginController($scope, $state, AuthService) { 
	$scope.loginFrm = {};

	$scope.doLogin = function(loginFrm) {
	    if(AuthService.login(loginFrm)){
	    	$state.go("home");
	    }else{
	    	//alert(":-(");  //Mostrara in alert sin estilo
	    		
	    	//usamos el plugin de dialogos , para usar alertas nativas :-D
	    	navigator.notification.alert(
			    ':-(', // mensaje
			    function() {}, // callback
			    'Workshop', // titulo
			    'Ok' // Nombre del Boton
			);
	    }
	};
}