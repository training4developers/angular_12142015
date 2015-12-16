(function(angular) {

	ctrl.$inject = ["$scope", "widgets2", "$q"];

	function ctrl($scope, widgets, $q) {

		widgets.getAll().then(function(results) {
			$scope.widgets = results.data;
		});
	}

	angular.module("WidgetApp.Controllers")
		.controller("HomeCtrl", ctrl)
		.directive("firstDir", function() {

			return {
				priority: 10,
				controller: function() {
					console.log("firstDir");
				}
			}

		})
		.directive("secondDir", function($compile) {

			return {
				priority: 50,
				terminal: true,
				controller: function() {
					console.log("secondDir");
				},
				compile: function(tElement, tAttrs) {

					var tpl = tElement[0].outerHTML;
					var pri = this.priority;

					return function(scope, element, attrs, ctrl, transclude) {

						var linkingFn = $compile(tpl, null, pri);
						var domElements = linkingFn(scope);
						element.append(domElements);

						var linkingFn = $compile(tpl, null, pri);
						var domElements = linkingFn(scope);
						element.append(domElements);

						var linkingFn = $compile(tpl, null, pri);
						var domElements = linkingFn(scope);
						element.append(domElements);

						var linkingFn = $compile(tpl, null, pri);
						var domElements = linkingFn(scope);
						element.append(domElements);											


					}

				}
			}

		});

})(angular);
