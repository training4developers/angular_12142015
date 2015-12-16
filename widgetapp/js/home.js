(function(angular) {

	ctrl.$inject = ["$scope", "widgets2", "$q"];

	function ctrl($scope, widgets, $q) {

		widgets.getAll().then(function(results) {
			$scope.widgets = results.data;
		});

		// promise explanation


		function myPromise() {
			var d = $q.defer();

			setTimeout(function() {
				d.resolve();
			}, 2000);

			return d.promise;
		}

		var p = myPromise();

		p.then(function() {
			
		})

		var p = new Promise(function(resolve, reject) {

			setTimeout(function() {
				resolve();
			},2000);

		});

		p.then(function() {
			console.log("success!");
		}).catch(function() {
			console.log("failure!");
		});


	}

	angular.module("WidgetApp.Controllers")
		.controller("HomeCtrl", ctrl);

})(angular);
