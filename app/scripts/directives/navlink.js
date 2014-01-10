'use strict';
/*global $:false */
angular.module('webpersonalApp')
  .directive('navLink', function () {
    return {
      link: function postLink(scope, element) {
        $(element).click(function() {
          var $button = $('#btn-navbar');
          if($button.css('display') === 'block') {
            $button.click();
          }
        });
      }
    };
  });
