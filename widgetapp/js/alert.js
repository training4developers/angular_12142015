(function(angular) {

	function directive() {

		return {
			restrict: "A",
			scope: {
				messages: "=fmrAlert",
				show: "=fmrAlertShow"
			},
			template: "<div ng-show='show'><h2>{{header}}</h2>" +
				"<ul><li ng-repeat='message in messages'>{{message}}</li></ul>" +
				"</div>",
			link: function(scope, element, attrs) {
				scope.header = attrs.fmrAlertTitle;
			}
		};

	}

	angular.module("WidgetApp.Directives")
		.directive("fmrAlert", directive);

})(angular)
