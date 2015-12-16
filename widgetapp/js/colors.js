(function(angular) {

	function factory() {

		var colors = [
			{ code: "blue", name: "Blue", category: "Budget" },
			{ code: "red", name: "Red", category: "Premium" },
			{ code: "orange", name: "Orange", category: "Budget" },
			{ code: "purple", name: "Purple", category: "Premium" },
			{ code: "tomato", name: "Tomato", category: "Standard" },
			{ code: "green", name: "Green", category: "Standard" }
		];

		return {

			getAll: function() {
				return colors;
			}
		};

	}

	angular.module("WidgetApp.Services")
		.factory("colors", factory)

})(angular);
