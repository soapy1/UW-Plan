function RequirementCtrl($scope){

	$scope.programReq = [];
	$scope.cseReq = [];

	$scope.Initialize = function()
	{
		// Add the program name from the search text bar
		var programURL = "Jsons/".concat($scope.programName, "_Req.json");
		
		// Might have to change url if the file name changes
		var cseURL = "Jsons/CSE_req.json";

		var programData;
		var cseData;

		$.getJSON(programURL,function(data){
				
				programData = data.data.Requirements;

				var programDataAdd = [];

				for(var i = 0; i<programData.length;i++){
					
					programDataAdd[i].id = programData[i].Term;

					var curCourses = programData[i].Courses;

					for (var k = 0; k<curCourses.length;k++){
						programDataAdd[i].courses.push(curCourses[k]);
					}

				}

			$scope.programReq = programDataAdd;
			$scope.$apply();		

		});

		$.getJSON(cseURL,function(data){
				cseData = data.data;
				$scope.cseReq = cseData;
				$scope.$apply();
		});

		
			
	}

	$scope.checkRequirement = function(){

			for(var i = 0; i<$scope.cseReq.length; i++){
				var curCourses = $scope.cseReq[i].Courses;
				var amount = $scope.schedule[i].Amount;
				var curAmount = 0;
				for(var k = 0; k<curCourses.length; k++){
					if(checkCurrentCourseRequirement(curCourses[j]))
						curAmount++;

					if(curAmount>amount){
						$scope.cseReq[i].Alive = "false";
					}
				}
			}
			

	}


	$scope.checkCurrentCourseRequirement = function(courseName){

		var metReq = false;

		for (var i = 0; i<terms; i++){
			
			curCourses = terms[i].courses;

			if(curCourses.indexOf(courseName)>-1)
				metReq = true;

			if(metReq)
				return metReq;			

		}

		return metReq;
	}


	$scope.resetCSE = function(){

		var cseURL = "Jsons/CSE_req.json";

		$.getJSON(cseURL,function(data){
				$scope.cseReq = data.data;
				$scope.$apply();
		});

	
	}


}