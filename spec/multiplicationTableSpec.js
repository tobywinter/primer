const multiply = require('../src/multiplicationTable');

describe('MultiplicationTable', function(){
  const testPrimes = [2,3,5];
  const expectationOne = [[2,3,5],[4,6,10],[6,9,15],[10,15,25]];
  const expectationTwo = [['-',2,3,5],[2,4,6,10],[3,6,9,15],[5,10,15,25]]
  const exp = [[ '-', 2, 3, 5 ],
  [ 2, 4, 6, 10 ],
  [ 3, 6, 9, 15 ],
  [ 5, 10, 15, 25 ]];

  beforeEach(function(){
    multiplicationTable = new multiply.MultiplicationTable();
  });

  describe('calculate', function(){
    it("creates a multidimensional array of a multiplied array", function() {
      expect(multiplicationTable.calculate(testPrimes)).toEqual(expectationOne);
    });
  });

  describe('tabulate', function(){
    it("makes a multidimensional ready to be printed as table", function() {
      expect(multiplicationTable.tabulate(testPrimes)).toEqual(expectationTwo);
    });
  });
});
