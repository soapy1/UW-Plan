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

	$scope.addSpecificCourses = function(courseType){
		var url = "https://api.uwaterloo.ca/v2/courses/".concat(courseType,".json?key=d0d2408334366902f5105ce8e8211356");
		$.getJSON(url,function(data){
			var courses = data.data;
			for (var i; i < courses.length; i++) {
				var courseName = (courses[i].subject).concat(courses[i].catalog_number);
				$scope.specificCourses.push(courseName);
			};

		});
	};

	$scope.checkExact = function(){
		document.getElementById('main-courses-content').innerHTML="specific courses";

        if(($scope.course).indexOf($scope.courseType)>-1){
			$scope.addSpecificCourses($scope.courseType);
			document.getElementById('main-courses-content').innerHTML="specific courses";
		}
		else{
			document.getElementById('main-courses-content').innerHTML="other one";
		}
	};

}
