'use strict';
import main from './addCase.component';
import {
	addCaseCtrl
} from './addCase.component';

describe('Component: AddCaseComponent', function() {
	// load the controller's module
	beforeEach(module('Add'));

	var scope;
	var AddCaseComponent;
	var state;
	var $httpBackend;

	beforeEach(inject(function(_$httpBackend_, $http, $componentController, $rootScope, $state) {
		$httpBackend = _$httpBackend_;
		$httpBackend.expectGET('/api/things')
			.respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

		scope = $rootScope.$new();
		state = $state;
		AddCaseComponent = $componentController('addCase', {
			$http,
			$scope: scope
		});
	}));


	it('should ...', function() {
		expect(1).to.equal(1);
	});
});
