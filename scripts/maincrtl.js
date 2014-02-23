function MainCtrl($scope){

	$scope.course = [
		"AFM",
		"ACSTSC",
		"ANTH",
		"AHS",
		"APPLS",
		"AMATH",
		"ARCH",
		"ARTS",
		"ARBUS",
		"AVIA",
		"BASE",
		"BIOL",
		"BME",
		"BUS",
		"BET",
		"CHE",
		"CHEM",
		"CHINA",
		"CMW",
		"CIVE",
		"CLAS",
		"CO",
		"COMM",
		"CS",
		"COOP",
		"CROAT",
		"DAC",
		"DRAMA",
		"DUTCH",
		"EARTH",
		"EASIA",
		"ECON",
		"ECE",
		"ENGL",
		"ESL",
		"EFAS",
		"ENBUS",
		"ERS",
		"ENVE",
		"ENVS",
		"FINE",
		"FR",
		"GENE",
		"GEOG",
		"GER",
		"GERON",
		"GBDA",
		"GRK",
		"HLTH",
		"HIST",
		"HRM",
		"HUMSC",
		"IS",
		"INDEV",
		"INTST",
		"INTTS",
		"ITAL",
		"ITALST",
		"JAPAN",
		"JS",
		"KIN",
		"INTEG",
		"KOREA",
		"LAT",
		"LS",
		"MATBUS",
		"MSCI",
		"MNS",
		"MATH",
		"MTHEL",
		"ME",
		"MTE",
		"MEDVL",
		"MUSIC",
		"NE",
		"NATST",
		"OPTOM",
		"PACS",
		"PHARM",
		"PHIL",
		"PHYS",
		"PLAN",
		"POLSH",
		"PSCI",
		"PORT",
		"PD",
		"PDPHRM",
		"PSYCH",
		"PMATH",
		"REC",
		"RS",
		"RUSS",
		"REES",
		"SCI",
		"SCBUS",
		"SMF",
		"SDS",
		"SOCWK",
		"SWREN",
		"STV",
		"SOC",
		"SE",
		"SPAN",
		"SPCOM",
		"STAT",
		"SI",
		"SYDE",
		"UNIV",
		"VCULT",
		"WS",
		"WKRPT"
	];

    $scope.getIndex = function(termId){
		var index;
		switch(termId){
			case '1A':
				index = 0;
				break;
			case '1B':
				index = 1;
				break;
			case '2A':
				index = 2;
				break;
			case '2B':
				index = 3;
				break;
			case '3A':
				index = 4;
				break;
			case '3B':
				index = 5;
				break;
			case '4A':
				index = 6;
				break;
			case '4B':
				index = 7;
				break;
			default:
				index = 0;
			//	break;
		}
		return index;

	};

	$scope.specificCourses = [];

    $scope.courseView = [];

	$scope.addSpecificCourses = function(courseType, cb){
		var url = "https://api.uwaterloo.ca/v2/courses/".concat(courseType,".json?key=d0d2408334366902f5105ce8e8211356");
		$.getJSON(url,function(data){
			var courses = data.data;
			for (var i=0; i < courses.length; i++) {
				var courseName = (courses[i].subject).concat(courses[i].catalog_number);
				$scope.specificCourses.push(courseName);
                $scope.$apply();
            };
            
            cb();
		});
	};

	$scope.checkExact = function(){
		
        var letters = $scope.searchText.replace(/[0-9]+/g,'');
        $scope.specificCourses = [];
        console.log($scope.specificCourses);
        if(($scope.course).indexOf(letters)>-1){
			$scope.addSpecificCourses(letters, function(){
		        $scope.courseView = $scope.specificCourses;
                console.log($scope.specificCourses);
            });
        }
		else{
			$scope.courseView = $scope.course;
		}
	};

}
