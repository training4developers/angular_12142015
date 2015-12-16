(function(angular) {

	angular.module("WidgetApp.Services", []);
	angular.module("WidgetApp.Controllers", ["WidgetApp.Services"]);

	angular.module("WidgetApp", ["WidgetApp.Controllers"]);

})(angular);
