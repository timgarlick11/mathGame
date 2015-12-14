var app = angular.module("mathGame");

app.controller("mathGameController", function($scope, mathGameService) {

	mathGameService.tester();

	var topNumbers = [2,3,5,7,9,2,4,6,8,3];
	
	$scope.questions = [];
	$scope.userAnswers = {};
	$scope.answerCheck = [];
	

	$scope.numberGenerator = function() {
		$scope.questions = [];
		$scope.userAnswers = {};
		$scope.answerCheck = [];
		$scope.shower = true;
		$scope.disable = false;
		var random1 = Math.floor((Math.random() * 3));
		var random2 = Math.floor((Math.random() * 7) + random1);
		var random = Math.floor((Math.random() * random2) + random1);

		for (var i = 0; i < topNumbers.length; i++) {
			var numerator = Math.floor((Math.random() * topNumbers[i]) + random + 2); 
			var denominator= Math.ceil((Math.random() * topNumbers[i] + 2) + random2);
			// var answers = numerator + denominator;

			$scope.questions.push({
				top: numerator,
				bottom: denominator
				// answer: answers,			
			});
		}

		console.log($scope.questions)

	};
	
	$scope.stopTime = function() {
		$scope.shower = false;
		$scope.disable = true;
		angular.forEach($scope.userAnswers, function(v, i) {
			console.log($scope.questions[i].answer)
			if ($scope.userAnswers[i] != $scope.questions[i].answer) {
				$scope.answerCheck.push(false);
			} else {
				$scope.answerCheck.push(true);
			}
			console.log($scope.answerCheck);
		});
	}
});



