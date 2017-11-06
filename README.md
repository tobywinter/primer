
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
- Use the Pie function to estimate the upper limit, required to generate n primes. Since the Seive of Eratosthenes method generates prime numbers up to a given limit and we want a given number of primes.
- Make sure that more primes are generated with the sieve than are needed by the user.
- Multiply the resulting array of primes by each number in the initial array to generate a 2D array that will be printed as a multiplication table.
- Make sure any erroneous inputs are handled, using regex for simplicity. 



#### TDD the building of these key features:

## Structure

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

## Improvements

Given time to develop:
- I would build a front-end one page display.
