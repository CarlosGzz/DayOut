var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform, $state) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider){
    $ionicConfigProvider.tabs.position('bottom');
    
    $stateProvider
    .state('menu', {
        url: "/menu",
        abstract: true,
        templateUrl: 'templates/menu.html'
    })
    .state('menu.tab', {
        url: "/tab",
        abstract: true,
        views: {
            'menu-content': {
                templateUrl: "templates/tabs.html"
            }
        }
    })
    .state('menu.tab.groups', {
        url: "/groups",
        views: {
            'tab-groups': {
                templateUrl: "templates/groups.html"
            }
        }
    })
    .state('menu.tab.explore', {
        url: "/explore",
        views: {
            'tab-explore': {
                templateUrl: "templates/explore.html",
                controller: "ExploreControl"
            }
        }
    })
    .state('menu.tab.touristMeList', {
        url: "/touristMeList",
        views: {
            'tab-touristMeList': {
                templateUrl: "templates/touristMeList.html",
                controller: "TouristMeControl"
            }
        }
    })
    .state('menu.tab.create', {
        url: "/create",
        views: {
            'tab-create': {
                templateUrl: "templates/create.html"
            }
        }
    })
    .state('menu.tab.settings', {
        url: "/settings",
        views: {
            'tab-settings': {
                templateUrl: "templates/settings.html"
            }
        }
    })
    .state('exploreSettings', {
        url: "/exploreSettings",
        templateUrl: "templates/exploreSettings.html",
        controller: "SettingsControl"
    })
    .state('touristMeSettings', {
        url: "/touristMeSettings",
        templateUrl: "templates/touristMeSettings.html",
        controller: "SettingsControl"
    })
    .state('profile', {
        url: "/profile",
        templateUrl: "templates/profile.html",
        controller: "ProfileControl"
    })
    .state('badges', {
        url: "/badges",
        templateUrl: "templates/badges.html",
        controller: "BadgesControl"
    })
    .state('turistMe', {
        url: "/turistMe/:routeId",
        templateUrl: "templates/turistMe.html",
        controller: "TouristMeControl"
    })
    .state('touristMeDetail', {
        url: "/touristMeDetail/:places",
        templateUrl: "templates/touristMeDetail.html",
        controller: "TouristMeControl"
    });
    
    $urlRouterProvider.otherwise('/menu/tab/explore');
});
