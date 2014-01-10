'use strict';
/*global $:false */
angular.module('webpersonalApp')
  .directive('terminal', function () {
    function showContent() {
      $('#about-me').show();
      $('#terminal').hide();
    }

    function showTerminal() {
      var typewriter = require('typewriter');
      var twSpan = document.getElementById('typewriter');
      var tw = typewriter(twSpan).withAccuracy(97)
                                 .withMinimumSpeed(8)
                                 .withMaximumSpeed(18)
                                 .build();
      tw.put('Last login: ' + new Date() + ' on jaime_ramirez001<br/>')
        .wait(500)
        .put('<strong>Hi, I am Jaime Ramírez</strong>. Let\'s start.<br/>')
        .waitRange(500, 1000)
        .put('$ ')
        .waitRange(500, 1000)
        .type('cd website')
        .put('<br/>')
        .wait(500)
        .put('$ ')
        .waitRange(1000, 1500)
        .type('./show about_me')
        .put('<br/>')
        .wait(500)
        .put('Loading Content')
        .put('.').waitRange(50, 300).put('.').waitRange(50, 200).put('.').waitRange(50, 200).put('.')
        .put('<br/><br/>')
        .put('<strong style="color: #3b3;">[Done]</strong><br/>')
        .wait(100,function() {
          $('#about-me').slideDown('fast');
        })
        .wait(1000)
        .put('<br/>')
        .put('Hiding terminal now...')
        .waitRange(500, 1000, function() {
          $('#terminal').slideUp('fast');
        });
    }
    return {
      link: function postLink() {
          if(typeof(Storage)!=='undefined')
          {
            if(sessionStorage.returningVisitor !== 'yes') {
              showTerminal();
            }
            else {
              showContent();
            }
            sessionStorage.returningVisitor = 'yes';
          }
          else {
            showContent();
          }
        }
    };
  });
