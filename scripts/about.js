
angular.module('AboutModule', ['ui.router'])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('about', {
                parent: 'site',
                url: '/',
                templateUrl: 'about.html',
                controller: 'AboutController'
            });
    }])
    .controller('AboutController', ['$scope', '$state', function($scope, $state) {
        $scope.heading = 'About';
    }]);
