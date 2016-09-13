var app = angular.module("customApp",[]);

app.controller("controller",function($scope){
    $scope.students=[{name:'Tharun'},{name:'Manoj'},{name:'Pratyusha'},{name:'Sirish'},{name:'Renuka'},{name:'Subhajit'},{name:'Partib'},{name:'Shanta'},{name:'Gowthami'},{name:'Srikanth'},{name:'Maruthi'},{name:'Harsha'},{name:'Praneeth'},{name:'Deepika'}];
   
});

app.filter("customSearch",function(){
   return function(input,search){
       var output=[];
      if(search==null)
          {
            return input;
          }
       else
           {
               for(i=0;i<input.length;i++)
               {
                     if(input[i].name.toLowerCase().startsWith(search))
                     {
                         output.push(input[i]);
                     }  
               }
               return output;
           }
   }
});