(function(){
"use strict";
(function(app) {

    app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    }]);

    app.constant('_', window._);

    app.run(["$rootScope", function ($rootScope) {
        $rootScope._ = window._;
    }]);

    app.controller('AppController', ["$scope", function ($scope) {

    }]);

}(angular.module("app", [
    'app.home',
    'templates-app',
    'ngAnimate',
    'ui.router.state',
    'ui.router'
])));

})();