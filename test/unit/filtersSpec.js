'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {
    beforeEach(module('phonecatFilters'));
    
    describe('checkmark', function(){
      it('sould convert boolean values to unicodes',
          inject(function(checkmarkFilter){
            expect(checkmarkFilter(true)).toBe('\u2713');
            expect(checkmarkFilter(false)).toBe('\u2718');
          }));
    });
});
          