'use strict';

describe('Controller: NavCtrl', function () {

  // load the controller's module
  beforeEach(module('webpersonalApp'));

  var NavCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavCtrl = $controller('NavCtrl', {
      $scope: scope
    });
  }));

  it('should have a isCurrentPath function', function () {
    expect(scope.isCurrentPath('path')).toBe(false);
  });
});
