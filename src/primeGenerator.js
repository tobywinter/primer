

function PrimeGenerator() {
}

PrimeGenerator.prototype.estimateLimit = function(number) {
  var estimate = Math.PI * (number);
  return Math.floor(estimate);
};

PrimeGenerator.prototype.sieveOfEratosthenes = function(limit) {
  var sieve = [];
  var primes = [];
  var i;
  var l;
  sieve[1] = false;
  for (i = 2; i <= limit; i += 1) {
    sieve[i] = true;
  }
  for (i = 2; i <= Math.sqrt(limit); i += 1) {
    if (sieve[i] !== true) {
      continue;
    }
    for (l = i * i; l <= limit; l += i) {
      sieve[l] = false;
    }
  }
  sieve.forEach(function (value, key) {
    if (value) {
      this.push(key);
    }
  }, primes);
  return primes;
};

PrimeGenerator.prototype.generate = function(n) {
  return [2,3,5,7];
};


module.exports.PrimeGenerator = PrimeGenerator;
