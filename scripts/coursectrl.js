function CourseCtrl($scope){

$scope.terms = [
	{id: '1A', courses:[]},
	{id: '1B', courses:[]},
	{id: '2A', courses:[]},
	{id: '2B', courses:[]},
	{id: '3A', courses:[]},
	{id: '3B', courses:[]},
	{id: '4A', courses:[]},
	{id: '4B', courses:[]}

];
	$scope.getIndex = function(termId){
		var index;
		switch(termId){
			case:'1A'
				index = 0;
				break;
			case: '1B'
				index = 1;
				break;
			case: '2A'
				index = 2;
				break;
			case: '2B'
				index = 3;
				break;
			case: '3A'
				index = 4;
				break;
			case: '3B'
				index = 5;
				break;
			case: '4A'
				index = 6;
				break;
			case: '4B'
				index = 7;
				break;
			default:
				index = 0;
				break;
		}
		return index;

	};

	$scope.addCourse = function(termId, courseName){
		var index = getIndex(termId);
		$scope.terms[index].courses.push(courseName);
		}
	};

	$scope.deleteCourse = function(termId,courseName){
		var index = getIndex(termId);
		for(var i = 0; i<$scope.terms[index].courses.length){

			if($scope.terms[index].courses[i]===courseName){
				$scope.terms[index].courses.splice(i,1);
				break;
			}
		}
	};

	$scope.clearEverything = function(){	
		$scope.terms = [
		{id: '1A', courses:[]},
		{id: '1B', courses:[]},
		{id: '2A', courses:[]},
		{id: '2B', courses:[]},
		{id: '3A', courses:[]},
		{id: '3B', courses:[]},	
		{id: '4A', courses:[]},
		{id: '4B', courses:[]}

	];

	};

	$scope.prereqComplete = function(courseName){

		var letters = courseName.replace(/\D/g,'');	
		var numbers = courseName.replace(/[0-9]+/g,"");
		var url = "https://api.uwaterloo.ca/v2/courses/".concat(letters,"/",numbers,"/prerequisites.json?key=d0d2408334366902f5105ce8e8211356");
		var data;
		var preReq = true;

		$.getJSON(url, function(dataInsideQuery){
			data = dataInsideQuery.data.prerequisites_parsed;
		});
		setTimeout(function(){
			
			preReq = checkIfPreReqMet(data, preReq);

		},500);
	};

	$scope.checkIfPreReqMet(object,preReq)
	{
		if(preReq==false)
			return preReq;
		else {
			for(var i = 0; i<object.length;i++)
			{
				if(object[i].length>0){
					checkIfPreReqMet(object[i],preReq);
				}
				else{
					var amount = object[0];
					var curAmount = 0;
					for(var k = 1; i<object.lenght;k++){
						if(checkIfPreReqPresent(object[k])){
							curAmount++;
						}
					}
					if (curAmount<amount) {
						preReq=false;
					}
					if(~preReq){return preReq;}
				}

			}
		}
		return preReq;
			
	};

	$scope.checkIfPreReqPresent(codeName){
		var preReq=false;
		for (var i = 0; i<$scope.terms.length;i++){
			curCourses = $scope.terms[i].courses;
			if(curCourses.indexOf(codeName)>-1){
				preReq = true;
			}
			if(preReq){
				break;
			}

		}
		return preReq;
	}

}