var rl = require('readline');
var Table = require('easy-table');
const PrimeGenerator = require('./src/primeGenerator').PrimeGenerator;
const MultiplicationTable = require('./src/multiplicationTable').MultiplicationTable;
const InputChecker = require('./src/inputChecker').InputChecker;

var read = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

var run = function() {
  read.question("How many primes do you require? - (Input Number)  ", function (input) {
   if (new InputChecker().checkInput(input)) {
     read.close();
     var n = parseInt(input);
     console.log("First " + n + " prime numbers:");
     var primeGenerator = new PrimeGenerator();
     var multiplicationTable = new MultiplicationTable();
     var primes = primeGenerator.generate(n);
     var table = multiplicationTable.tabulate(primes);
     console.log(Table.print(table));
   } else {
     console.log("Invalid input: Please input a whole integer greater than 1");
     run();
   }
 });
};
run();
