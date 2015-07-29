angular.module('workshop', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {   // Nombre del Estado
            url: '/login',  // Ruta
            templateUrl: 'js/app/views/login.html',  // Ubicacion de nuestra vista
            controller: 'LoginController'   // Controlador que usa esa vista
        })
        .state('home', {
            url: '/home',
            templateUrl: 'js/app/views/home.html',
            controller: 'HomeController'
        })
        //En este ultimo State, demostramos el envio de valores entre States, en este caso de Home => Search
        .state('search', {
            url: '/search/:query',
            templateUrl: 'js/app/views/search.html',
            controller: 'SearchController'
        });
    $urlRouterProvider.otherwise('/login'); // ruta x default
})
