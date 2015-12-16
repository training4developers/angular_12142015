(function(angular) {

	ctrl.$inject = ["$scope", "widgets2", "$q"];

	function ctrl($scope, widgets, $q) {

		widgets.getAll().then(function(results) {
			$scope.widgets = results.data;
		});

		// promise explanation

		var d = $q.defer();

		d.promise.then(function() {
			console.log("a");
		}).then(function() {
			console.log("b");
		}).then(function() {
			console.log("c");
			//throw Error("c had an error");
		}).then(function() {
			console.log("d");
		}).then(function() {
			console.log("e");
		}).then(function() {
			console.log("f");
		}).catch(function(results) {
			console.log("error occurred...");
			console.log(results);
		}).finally(function() {
			console.log("all done");
		});

		setTimeout(function() {
			d.resolve();
		},1000);



	}

	angular.module("WidgetApp.Controllers")
		.controller("HomeCtrl", ctrl);

})(angular);
