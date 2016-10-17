angular.module('factories.navbar', []);
angular.module('factories.navbar').factory('navbar', ['$rootScope', function($rootScope) {

    var obj = {};

    obj.init = function() {

        obj.logoutShow(0);
    }

    obj.logoutShow = function(show) {

        $rootScope.loginShow = show;
    }

    return obj;
}])