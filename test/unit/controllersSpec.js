'use strict';

/* jasmine specs for controllers go here */

describe('PhoneListController tests', function() {

	beforeEach(module('phonecatApp'));

	it('should create "phones" model with 3 phones', inject(function($controller) {
		var scope = {};
		var ctrl = $controller('PhoneListCtrl', {
			$scope : scope
		});

		expect(scope.phones.length).toBe(3);
	}));

});
