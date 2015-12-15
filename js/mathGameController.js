var app = angular.module("mathGame");

app.controller("mathGameController", function($scope, $interval, mathGameService) {

	mathGameService.tester();

	var topNumbers = [2,3,5,7,9,2,4,6,8,3];
	
	$scope.questions = ["","","","","","","","","",""];
	$scope.userAnswers = {};
	$scope.answerCheck = [];
	$scope.buttonDisable = true;
	

	$scope.numberGenerator = function() {
		$scope.questions = [];
		$scope.userAnswers = {};
		$scope.answerCheck = [];
		$scope.buttonDisable = true;
		$interval.cancel(stop);
		stop  = undefined;
		$scope.m = "00";
		$scope.s = "00";
		count = 0;

		var random1 = Math.floor((Math.random() * 3));
		var random2 = Math.floor((Math.random() * 7) + random1);
		var random = Math.floor((Math.random() * random2) + random1);

		for (var i = 0; i < topNumbers.length; i++) {
			var numerator = Math.floor((Math.random() * topNumbers[i]) + random + 2); 
			var denominator= Math.ceil((Math.random() * topNumbers[i] + 2) + random2);
			var answers = numerator + denominator;

			$scope.questions.push({
				top: numerator,
				bottom: denominator,
				answer: answers			
			});
		}
	};

	var stopWatch = function(seconds)
	{
		$scope.m = Math.floor(seconds / 60) % 60;
		$scope.s = seconds % 60;
		if ($scope.m  < 10)  $scope.m  = "0" +  $scope.m;
		if ($scope.s < 10) $scope.s = "0" + $scope.s;
		//return  $scope.m + ":" + $scope.s;
	}
	var count = 0;
	var stop; // you have to assign a the interval function to a variable so you can pass that variable in to the cancel function to stop the correc timer.
	$scope.timer = function() {
		stop = $interval(function ()
		{
			count++;
			stopWatch(count);

		}, 1000)
	}

	$scope.counter = function() {
		if (Object.keys($scope.userAnswers).length > 9) {
			$scope.buttonDisable = false;
		}
		console.log(Object.keys($scope.userAnswers).length);
	}
	
	$scope.stopTime = function() {
		$interval.cancel(stop);
		$scope.shower = false;
		$scope.disable = true;
		angular.forEach($scope.userAnswers, function(v, i) {
			console.log($scope.questions)
			if ($scope.userAnswers[i] != $scope.questions[i].answer) {
				$scope.answerCheck.push(false);
			} else {
				$scope.answerCheck.push(true);
			}
			console.log($scope.answerCheck);
		});
	}
});



