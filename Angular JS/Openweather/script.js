var app=angular.module("weatherApp",['ngRoute']);
app.controller("controller",function($scope, $http){
    $scope.callSearch=function(){
        if((typeof $scope.cityName =='undefined' || $scope.cityName=='') && (typeof $scope.zipCode == 'undefined'|| $scope.zipCode==''))
            {
                $scope.error="Please enter either City Name or Zip Code"
            }
        
        else if(($scope.cityName!='') && (typeof $scope.zipCode == 'undefined'|| $scope.zipCode==''))
            {
                $scope.error="";
                search();
            }
        else if(($scope.zipCode!='') && (typeof $scope.cityName =='undefined' || $scope.cityName=='') )
            {
                $scope.error="";
                searchZip();
            }
        else if($scope.cityName!='' && $scope.zipCode!='')
            {
                console.log($scope.cityName);
                console.log($scope.zipCode);
                $scope.error="Enter only one of the above.";
            }
       /* else
            {
                $scope.error="";
                search();
            }*/
    }
    
    function search(){
        $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=08bcdb92769cbbd59e2c7c22fea6314d&units=metric&q="+$scope.cityName).then(function(response){
            $scope.details=response.data;
            console.log(response);
            //console.log("response");
           console.log(response.data);
        });
    }
    
    function searchZip(){
        $http.get("http://api.openweathermap.org/data/2.5/weather?APPID=08bcdb92769cbbd59e2c7c22fea6314d&units=metric&zip="+$scope.zipCode+",us").then(function(response){
            $scope.details=response.data;
           console.log(response.data);
        });
    }
    
});

app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/weather',{
        templateUrl:'weather.html'})
    $routeProvider.otherwise({redirectTo:'index.html'})
    
}]);