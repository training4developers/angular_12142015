(function(angular) {

	filterFactory.$inject = ["colors"];

	function filterFactory(colors) {

		return function(value) {

			var filteredColors = colors.getAll().filter(function(color) {
				return color.code === value;
			});

			if (filteredColors.length < 1) {
				return value;
			} else {
				return filteredColors[0].name;
			}

		};

	}

	angular.module("WidgetApp.Filters")
		.filter("colorName", filterFactory)


})(angular);
