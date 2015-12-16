(function(angular) {

	ctrl.$inject = ["$scope", "widgets2", "$stateParams", "$state", "colors"]

	function ctrl($scope, widgets, $stateParams, $state, colors) {

		// $scope.widget = angular.extend({}, widgets.get(parseInt($stateParams.widgetId,10)));

		if ($stateParams.widgetId) {
			widgets.get($stateParams.widgetId).then(function(results) {
				$scope.widget = results.data;
			});
		} else {
			$scope.widget = {};
		}

		$scope.colors = colors.getAll();

		function valid() {
			$scope.messages = [];
			var invalid = false;
			if (!$scope.widget.name) {
				$scope.messages.push("Please enter a widget name.");
				invalid = true;
			}
			return !invalid;
		}

		$scope.saveWidget = function() {

			$scope.showAlert = false;
			if (!valid()) {
				$scope.showAlert = true;
				return;
			}

			if ($scope.widget._id) {
				widgets.update($scope.widget).then(function() {
					$state.go("home");
				});
			} else {
				widgets.insert($scope.widget).then(function() {
					$state.go("home");
				});
			}
		};

		$scope.deleteWidget = function() {
			if (confirm("Are you sure you want to delete the widget?")) {
				widgets.delete($scope.widget._id).then(function() {
					$state.go("home");
				});
			}
		};
	}

	angular.module("WidgetApp.Controllers")
		.controller("EditCtrl", ctrl);

})(angular);
