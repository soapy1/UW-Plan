function Temp($scope){

	$scope.courseDescription = "";
	$scope.courseTilte = "";


	$scope.$on("$routeChangeSuccess", function(event, current, previous){
         param = current.params.courseid;

		 var letters = courseid.replace(/\D/g,'');
		 var numbers = courseid.replace(/[0-9]+/g,'');
		 var url = "https://api.uwaterloo.ca/v2/courses/".concat(letters,'/',numbers,'/.json?key=d0d2408334366902f5105ce8e8211356/');

		 $.getJSON(url,function(data){

		 		$scope.courseDescription = data.data.description;
		 		$scope.course = data.data.title;

		 });

	}

}