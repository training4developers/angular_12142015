(function(angular) {

	config.$inject = ["widgets2Provider", "WidgetRESTSvcBaseUrl"]

	function config(widgets2Provider, WidgetRESTSvcBaseUrl) {
		widgets2Provider.setBaseUrl(WidgetRESTSvcBaseUrl);
	}

	angular.module("WidgetApp.Services")
		.config(config);

})(angular);
