(function(app) {

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    });

    app.constant('_', window._);

    app.run(function ($rootScope) {
        $rootScope._ = window._;
    });

    app.controller('AppController', function ($scope) {

    });

}(angular.module("app", [
    'app.home',
    'templates-app',
    'ngAnimate',
    'ui.router.state',
    'ui.router'
])));
