var app = angular.module("mathGame");

app.controller("mathGameController", function($scope, mathGameService) {

	mathGameService.tester();

	var topNumbers = [2,3,5,7,9,2,4,6,8,3];
	var bottomNumbers = [5,4,6,8,2,3,5,7,9,7];

	$scope.top = [];
	$scope.bottom = [];
	$scope.answerSheet = {};
	$scope.userAnswers = {};
	$scope.wrongAnswers = [];

	$scope.numberGenerator = function() {
		$scope.top = [];// empty out the array
		$scope.bottom = [];//empty out the array
		$scope.answerSheet = {};//empty out the object
		$scope.userAnswers = {};// empty out the object
		$scope.wrongAnswers = [];// empty out object
		$scope.shower = true;

		var random1 = Math.floor((Math.random() * 3) + 4);
		var random2 = Math.floor((Math.random() * 7) + random1);
		var random = Math.floor((Math.random() * random2) + random1);

		for (var i = 0; i < topNumbers.length; i++) {
			var numerator = Math.floor((Math.random() * topNumbers[i]) + random);
			$scope.top.push(numerator);
			console.log($scope.top);
		};
		for (var i = 0; i < bottomNumbers.length; i++) {
			var denominator = Math.floor((Math.random() * bottomNumbers[i]) + random);
			$scope.bottom.push(denominator);
			console.log($scope.bottom);
		};

		for (var i=0; i < $scope.top.length; i++) {
			var answerSheet = $scope.top[i] + $scope.bottom[i];
			$scope.answerSheet[i] = answerSheet;
			console.log($scope.answerSheet);
		}
	};
	$scope.stopTime = function() {
		console.log($scope.userAnswers);
		var tester = angular.equals($scope.answerSheet, $scope.userAnswers);
		console.log(tester);
		console.log($scope.answerSheet);
		console.log($scope.userAnswers);
		$scope.shower = false;
		
		angular.forEach($scope.answerSheet, function(v, i) {
			console.log(v,i)
			if ($scope.userAnswers[i] != v) {
				$scope.wrongAnswers.push(false);
			} else {
				$scope.wrongAnswers.push(true);
			}
			console.log($scope.wrongAnswers);
		});
	}
});



