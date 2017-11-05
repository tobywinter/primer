const pG = require('../src/primeGenerator');
const PrimeGenerator = pG.primeGenerator;

describe('PrimeGenerator', function(){

  beforeEach(function(){
    primeGenerator = new pG.PrimeGenerator();
  });

  describe('estimateLimit', function(){
    it("estimates the upper limit needed to generate n primes", function() {
      expect(primeGenerator.estimateLimit(4)).toEqual(12);
    });
  });

  describe('sieveOfEratosthenes', function(){
    it("returns all prime numbers up to limit", function() {
      expect(primeGenerator.sieveOfEratosthenes(12)).toEqual([2, 3, 5, 7, 11]);
    });
  });

  describe('generate', function(){
    it("returns the first n primes", function() {
      expect(primeGenerator.generate(4)).toEqual([2,3,5,7]);
    });
  });
});
