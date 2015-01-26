
angular
    .module('samgenetics', [
        'ui.router',
        'ui.bootstrap',
        'PhotosModule',
        'AboutModule'
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('site', {
                'abstract': true,
                templateUrl: 'common/content.html'
            });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }]).run();