var app = angular.module("mathGame");

app.service("mathGameService", function($q, $http) {

	this.tester = function() {
		console.log("I am from the service");
	}

});



var stings = "hi this is tim";
var reversedString;

var reverse = function(sentence) {
	var splitter = strings.split('');
	for (var i = splitter.length - 1; i >= 0; i--) {
		reverseString.push(splitter[i])
	};
	reverseString.join('')


}