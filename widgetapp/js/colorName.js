(function(angular) {

	filterFactory.$inject = ["colors"];

	function filterFactory(colors) {

		return function(value) {

			return colors.getAll().filter(function(color) {
				return color.code === value;
			})[0].name;

		};

	}

	angular.module("WidgetApp.Filters")
		.filter("colorName", filterFactory)


})(angular);
