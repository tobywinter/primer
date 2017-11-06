const iC = require('../src/inputChecker');

describe('InputChecker', function() {

  beforeEach(function(){
    checker = new iC.InputChecker();
  });

  describe('checkInput', function() {
    it('returns false if input is not a whole number N', function(){
      expect(checker.checkInput(1.5)).toEqual(false);
    });

    it('returns false if input is negative', function(){
      expect(checker.checkInput(-5)).toEqual(false);
    });

    it('returns false if input is not a number', function() {
      expect(checker.checkInput('Five')).toEqual(false);
    });

    it('returns true if input is valid', function() {
      expect(checker.checkInput(5)).toEqual(true);
    });
  });
});
