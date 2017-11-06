const iC = require('../src/inputChecker');

describe('InputChecker', function() {

  beforeEach(function(){
    checker = new iC.InputChecker();
  });

  describe('checkInput', function() {
    it('It returns false if input is not a whole number N', function(){
      expect(checker.checkInput(1.5)).toEqual(false);
    });
  });
});
