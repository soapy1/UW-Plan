function TempCtrl($scope){

	$scope.desc = "";
	$scope.title = "";


	$scope.$on("$routeChangeSuccess", function(event, current, previous){
         param = current.params.courseid;
         console.log(current);
		 var numbers = param.replace(/\D/g,'');
		 var letters = param.replace(/[0-9]+/g,'');
		 var url = "https://api.uwaterloo.ca/v2/courses/".concat(letters,'/',numbers,'.json?key=d0d2408334366902f5105ce8e8211356');

		 $.getJSON(url,function(data){
                $scope.desc = data.data.description;	
                $scope.title = data.data.title;
                $scope.$apply();
         });
    });
}
