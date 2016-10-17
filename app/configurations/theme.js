angular.module('app').config(['$mdThemingProvider',function($mdThemingProvider){

	var customPrimary = {
        '50': '#fabdaa',
        '100': '#f8ab92',
        '200': '#f7987a',
        '300': '#f58662',
        '400': '#f4734a',
        '500': '#F26132',
        '600': '#f04f1a',
        '700': '#e3420e',
        '800': '#cb3b0d',
        '900': '#b3340b',
        'A100': '#fbd0c2',
        'A200': '#fde2da',
        'A400': '#fef5f2',
        'A700': '#9b2d0a',
        'contrastDefaultColor': 'light'
    };
    $mdThemingProvider
        .definePalette('customPrimary', 
                        customPrimary);

    var customAccent = {
        '50': '#000000',
        '100': '#000000',
        '200': '#050505',
        '300': '#121212',
        '400': '#1e1e1e',
        '500': '#2b2b2b',
        '600': '#454545',
        '700': '#515151',
        '800': '#5e5e5e',
        '900': '#6b6b6b',
        'A100': '#454545',
        'A200': '#383838',
        'A400': '#2b2b2b',
        'A700': '#787878',
        'contrastDefaultColor': 'light'
    };
    $mdThemingProvider
        .definePalette('customAccent', 
                        customAccent);

    var customWarn = {
        '50': '#ffffff',
        '100': '#ffffff',
        '200': '#ffffff',
        '300': '#ffffff',
        '400': '#f7f7f7',
        '500': '#eaeaea',
        '600': '#dddddd',
        '700': '#d0d0d0',
        '800': '#c4c4c4',
        '900': '#b7b7b7',
        'A100': '#ffffff',
        'A200': '#ffffff',
        'A400': '#ffffff',
        'A700': '#aaaaaa'
    };
    $mdThemingProvider
        .definePalette('customWarn', 
                        customWarn);

    $mdThemingProvider.theme('default')
       .primaryPalette('customPrimary')
       .accentPalette('customAccent')
       .warnPalette('customWarn');

}]);