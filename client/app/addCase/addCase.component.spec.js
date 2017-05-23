'use strict';

describe('Component: AddCaseComponent', function() {
  // load the controller's module
  beforeEach(module('Add'));

  var AddCaseComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    AddCaseComponent = $componentController('addCase', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
