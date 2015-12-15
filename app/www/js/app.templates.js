angular.module('MyApp.Templates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("home.tpl.html",
    "<h1>Widgets App!!!!!!</h1>");
}]);
