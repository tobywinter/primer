

function PrimeGenerator() {
}

PrimeGenerator.prototype.estimateLimit = function(number) {
  return Math.PI(number);
};

module.exports.PrimeGenerator = PrimeGenerator;
