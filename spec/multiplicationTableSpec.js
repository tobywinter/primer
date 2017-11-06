const multiply = require('../src/multiplicationTable');

describe('MultiplicationTable', function(){
  var TESTPRIMES = [2,3,5];
  var EXPECTATION = [[2,3,5],[4,6,10],[6,9,15],[10,15,25]];

  beforeEach(function(){
    multiplicationTable = new multiply.MultiplicationTable();
  });

  describe('calculate', function(){
    it("creates a multidimensional array of a multiplied array", function() {
      console.log(multiplicationTable.calculate(TESTPRIMES))
      expect(multiplicationTable.calculate(TESTPRIMES)).toEqual(EXPECTATION);
    });
  });
});
