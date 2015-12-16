(function(angular) {

	ctrl.$inject = ["$scope", "widgets"];

	function ctrl($scope, widgets) {

		$scope.widgets = widgets.getAll();

	}

	angular.module("WidgetApp.Controllers")
		.controller("HomeCtrl", ctrl);

})(angular);
