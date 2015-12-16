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
			console.log("time to get ready to get married!");
			console.log(results);
		}).catch(function(results) {
			console.log("young man is going sign up for FarmersOnly.com ...");
			console.log(results);
		});

		setTimeout(function() {
			console.log("she has decided...");
			youngLady.reject("she took a Facebook poll, and her friends said no...");
		},3000);

		console.log("young man is waiting...");



	}

	angular.module("WidgetApp.Controllers")
		.controller("HomeCtrl", ctrl);

})(angular);
