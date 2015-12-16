(function(angular) {

	ctrl.$inject = ["$scope", "widgets2", "$q"];

	function ctrl($scope, widgets, $q) {

		widgets.getAll().then(function(results) {
			$scope.widgets = results.data;
		});

		// promise explanation

		var
			d1 = $q.defer(),
			d2 = $q.defer(),
			d3 = $q.defer(),
			d4 = $q.defer();

		var p5 = d1.promise.then(function() {
			console.log("d1 completed");
		});

		var p6 = $q.all([d1.promise,d2.promise,d3.promise,d4.promise])
			.then(function() {
				console.log("all resolved");
			});

		$q.all([p5,p6]).then(function() {
			console.log("p5 and p6 have completed");
		})

		setTimeout(function() {
			console.log("d1 resolved");
			d1.resolve();
		},2000);

		setTimeout(function() {
			console.log("d2 resolved");
			d2.resolve();
		},4000);

		setTimeout(function() {
			console.log("d3 resolved");
			d3.resolve();
		},6000);

		setTimeout(function() {
			console.log("d4 resolved");
			d4.resolve();
		},8000);
	}

	angular.module("WidgetApp.Controllers")
		.controller("HomeCtrl", ctrl);

})(angular);
