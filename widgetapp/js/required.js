(function(angular) {

	function directive() {

		return {
			require: "ngModel",
			link: function postLink(scope, element, attrs, ctrl) {

				function validate(value) {

					console.log(value);

					if (value == null || String(value).length === 0) {
						// invalid
						ctrl.$setValidity("fmr-required", false);
						return;
					} else {
						// valid
						ctrl.$setValidity("fmr-required", true);
						return value;
					}

				}

				ctrl.$formatters.push(validate);
				ctrl.$parsers.push(validate);

			}

		}

	}

	angular.module("WidgetApp.Directives")
		.directive("fmrRequired", directive)

})(angular);
