(function(angular) {

	ctrl.$inject = ["$scope", "widgets2", "$q"];

	function ctrl($scope, widgets, $q) {

		widgets.getAll().then(function(results) {
			$scope.widgets = results.data;
		});

		// promise explanation

		var youngLady = $q.defer();

		var youngMan = youngLady.promise;

		youngMan.then(function(results) {
			console.log(results);
			console.log("time to get ready to get married!");

			var marriageLicense = $q.defer();

			setTimeout(function() {

				console.log("getting a marriage license");
				marriageLicense.resolve("got the piece of paper...");

			}, 3000);

			return marriageLicense.promise;

		}).then(function(results) {
			console.log(results);
			console.log("moving on to the next step, find a place...");

			var findAPlace = $q.defer();

			setTimeout(function() {

				console.log("finding a place...");
				findAPlace.resolve("made a reservation...");

			}, 3000);

			return findAPlace.promise;

		}).then(function(results) {

			console.log("ready to go...");

			throw Error("there is a dispute over the land...");

			//return "let's elope!";

		}).then(function(results) {

			console.log(results);
			console.log("on the road...");

		}).catch(function(results) {
			console.log(results);
			console.log("something went wrong...");
		});

		setTimeout(function() {
			console.log("she has decided...");
			youngLady.resolve("no one else will marry her, so she will marry you...");
		},3000);

		console.log("young man is waiting...");
	}

	angular.module("WidgetApp.Controllers")
		.controller("HomeCtrl", ctrl);

})(angular);
