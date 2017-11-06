const m = require('../src/multiplicationTable');

describe('MultiplicationTable', function(){
  const testPrimes = [2,3,5];
  const testPrimesTwo = [2,3,5,7,11]
  const expectationOne = [[2,3,5],[4,6,10],[6,9,15],[10,15,25]];
  const expectationTwo = [['-',2,3,5],[2,4,6,10],[3,6,9,15],[5,10,15,25]]
  const expectationThree = [['-',2,3,5,7,11],
  [2,4,6,10,14,22],
  [3,6,9,15,21,33],
  [5,10,15,25,35,55],
  [7,14,21,35,49,77],
  [11,22,33,55,77,121]];

  beforeEach(function(){
    multiplicationTable = new m.MultiplicationTable();
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

    it("works with different sizes of array", function() {
      expect(multiplicationTable.tabulate(testPrimesTwo)).toEqual(expectationThree);
    });
  });
});
