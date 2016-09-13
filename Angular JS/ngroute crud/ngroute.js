var app = angular.module("myApp", ['ngRoute']);
        app.controller('myCtrl',function($scope,$http, $routeParams){
            var url = "http://jsonplaceholder.typicode.com/users";
            
            $http.get(url).success(function(response){
               $scope.students = response; 
                
                $scope.x = $routeParams.id;
            });
        });
app.config(['$routeProvider',
            function ($routeProvider) {
                $routeProvider
                .when('/', {
                templateUrl: 'index.html',
                controller: 'myCtrl'
                }).
                when('/Add', {
                    templateUrl: 'Views/add.html',
                    controller: 'myCtrl'
                }).
                 when('/Edit', {
                    templateUrl: 'Views/edit.html',
                    controller: 'myCtrl'
                }).
                 when('/Delete', {
                    templateUrl: 'Views/delete.html',
                    controller: 'myCtrl'
                }).
                 when('/Details/:id', {
                    templateUrl: 'Views/details.html',
                    controller: 'myCtrl'
                }).
                
                otherwise({
                    redirectTo: '/' 
                });            
            }
           ]);


