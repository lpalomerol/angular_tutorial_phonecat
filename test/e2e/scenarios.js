'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PhoneListController', function() {

  beforeEach(function() {
    browser.get('app/index.html');
  });

  it('Should create "phones" model with 3 phontes', function(){
	  var scope = {};
	  var ctrl = new PhoneListCtrl(scope);
	  expect(scope.phones.length).toBe(3);
  });
});
