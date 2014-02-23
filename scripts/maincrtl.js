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

    $scope.$on("$routeChangeSuccess", function(event, current, previous){
        param = current.params.term;
        if (param == undefined){
            document.getElementById('course-chooser').innerHTML = "";
        }else{
            document.getElementById('course-chooser').innerHTML='<div style="background-color:#ffeeee; border:2px solid; height:275px;"><center><h4>'+param+'</h4></center></div>'; 
        }
    });

}
