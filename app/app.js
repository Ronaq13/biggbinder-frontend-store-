angular.module('app',[

	'common',
	'commonStore',
	'home'
	// 'munHTML'
]);

// angular.module('app').run(['$templateCache', '$compile', '$rootScope',function($templateCache, $compile, $rootScope){

//     var templatesHTML = $templateCache.get('munHTML');
//     $compile(templatesHTML)($rootScope);
// }]);