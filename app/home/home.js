angular.module('home', []);
angular.module('home').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    var base = 'app/home/views/'

    $routeProvider
        .when('/', {

            templateUrl: base + 'home.html',
            controller: 'homeController'
        });

}]);