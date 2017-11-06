
Primer - Prime Generator
========================

## The Task
* An application that takes numeric input (N) from a user and outputs a multiplication table of (N) prime numbers.
* Should have an performant prime algorithm that can generate a list of 20,000+ primes.
* the user should input a whole number N, where is N is at least 1
* the application should output an N+1 x N+1 grid of numbers

* Example primes multiplication table when N is 3
```
|      |    2 |    3 |    5 |
|    2 |    4 |    6 |   10 |
|    3 |    6 |    9 |   15 |
|    5 |   10 |   15 |   25 |
```

## Approach
- The application should be able to generate a list of prime numbers, Sieve of Eratosthenes seems to be one of the most efficient ways to achieve this.
- Use the Pie function to estimate the upper limit, required to generate n primes. Since the Sieve of Eratosthenes method generates prime numbers up to a given limit and we want a given number of primes.
- Make sure that more primes are generated with the sieve than are needed by the user.
- Multiply the resulting array of primes by each number in the initial array to generate a 2D array that will be printed as a multiplication table.
- Make sure any erroneous inputs are handled, using regex for simplicity.



#### TDD the building of these key features:
- Generate Prime Numbers up to N
- Print Multiplication Table for primes up to N
- Handle user inputs: only accept whole numbers greater than 1
- Generate large quantities of prime numbers efficiently

## Structure

I used the constructor design pattern keeping the classes with single responsibilities. PrimeGenerator understands generating arrays of prime numbers to n. MultiplicationTable understands taking array input and turning into a 2D array of multiplied from the original array, and including extra elements making it essentially an unformatted multiplication table. And then the InputChecker understands what the input should look like and validates it.  

## To Run

- Clone & open the repo!

```
git clone git@github.com:tobywinter/primer.git

cd primer
```
- Make sure you have node installed and run:

```
npm install
```

#### Run the Tests in the console

```
jasmine
```

#### Run the App in the console!

```
node index.js

```

## Screenshots
#### Running the App

![Running the App](imgs/run_app.png)

#### Displaying the results
![Displaying the results](imgs/results_display.png)

#### Uncoopperative Users!
![Input handling](imgs/input_handling.png)

## Technologies
 - Javascript
 - Jasmine
 - easy-table
 - requirejs

## What I Am Happy With
- Learning about the different algorithm's used to generate prime numbers was fascinating, and I'm really please I got the sieveOfEratosthenes algorithm to work and include a few optimisations gleaned from my research.
- Really pleased that the PrimeGenerator method worked effectively after I realised I had gotten my nth prime estimation wrong. The fix isn't ideal but it works.

## Improvements

Given time to develop:
- I would want to try and optimise the nth prime estimate method, in my research online I found that there are several ways to do this a lot more accurately that I have, but understanding an implementing them was proving time consuming so I opted for a method which made an estimate that remains large enough to generate enough primes even when generating 200,000+ (in testing).
- With more time I will try and understand and fix the timeout error which index.js gets when trying to generate enormous numbers of primes. The generator can perform this fairly quickly so the issue I believe is somewhere else, potentially the estimation becomes problematic and if i could get the upper bound estimate to be more accurate it would help with this problem.
- I would definitely clean up some larger functions, try and break them down into smaller functions, but since the scope of the app is quite small it didn't prove very necessary at this stage.
- I might try and make my own table formatting but the npm package I've used does a really good job with very simple implementation so this is a maybe. 
- It'd be worth doing a front end version of the print out on a web page since the width limitations of the console make larger print outs unreadable.
