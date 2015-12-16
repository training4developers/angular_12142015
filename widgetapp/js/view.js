(function(angular) {

	ctrl.$inject = ["$scope", "widgets", "$stateParams"]

	function ctrl($scope, widgets, $stateParams) {
		$scope.widget = widgets.get(parseInt($stateParams.widgetId,10));
	}

	angular.module("WidgetApp.Controllers")
		.controller("ViewCtrl", ctrl);

})(angular);
