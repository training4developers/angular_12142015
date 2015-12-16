(function(angular) {

	config.$inject = ["$stateProvider", "$urlRouterProvider"];

	function config($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state("home", {
				url: "/",
				controller: "HomeCtrl",
				templateUrl: "tpls/home.html"
			})
			.state("create", {
				url: "/widgets/create",
				controller: "EditCtrl",
				templateUrl: "tpls/edit.html"
			})
			.state("view", {
				url: "/widgets/:widgetId",
				controller: "ViewCtrl",
				templateUrl: "tpls/view.html"
			})
			.state("edit", {
				url: "/widgets/:widgetId/edit",
				controller: "EditCtrl",
				templateUrl: "tpls/edit.html"
			});

	}

	angular.module("WidgetApp.Services")
		.config(config);

})(angular);
