
describe('PrimeGenerator', function(){
  var pG = require('../src/primeGenerator');


  beforeEach(function(){
    var primeGenerator = new pG.PrimeGenerator();
  });

  describe('estimateLimit', function(){
    it("estimates the upper limit needed to generate n primes", function() {
      expect(primeGenerator.estimateLimit(4)).toEqual(10);
    });
  });
});
