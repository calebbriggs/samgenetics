
angular.module('PhotosModule', ['ui.router'])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('photos', {
                parent: 'site',
                url: '/photos',
                templateUrl: 'photos.html',
                controller: 'PhotosController'
            });
    }])
    .controller('PhotosController', ['$scope', '$state', function($scope, $state) {
        $scope.heading = 'Photos';
        $scope.slides=[
            {image:"images/cross.jpg", text:"Cross"},
            {image:"images/Bennett.jpg", text:"Pig Jockey"}
        ]

    }]);
