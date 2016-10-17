angular.module('home').controller('homeController', ['$scope', 'navbar', function($scope, navbar) {

    // Navbar 
    navbar.currentNavItem = 'page 1';
    //  navbar.hideLoginSignup(0);


}]);