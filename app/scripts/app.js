'use strict';
/*global $:false */
angular.module('webpersonalApp', [
  'ngRoute','ngAnimate'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        title: 'About Me | '
      })
      .when('/experience', {
        templateUrl: 'views/experience.html',
        controller: 'ExperienceCtrl',
        title: 'Professional Experience | '
      })
      .when('/education', {
        templateUrl: 'views/education.html',
        controller: 'EducationCtrl',
        title: 'Education | '
      })
      .when('/skills', {
        templateUrl: 'views/skills.html',
        controller: 'SkillsCtrl',
        title: 'Skills | '
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl',
        title: 'Portfolio | '
      })
      .otherwise({
        redirectTo: '/'
      });
  }).
  run(function ($rootScope, $route){
    $rootScope.pageTitle = '';
    $rootScope.$on('$routeChangeSuccess', function() {
      $rootScope.pageTitle = $route.current.title;
      $(window).scrollTop(0);
    });
  });
