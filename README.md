
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
- Use the Pie function to estimate the upper limit, k, required to generate n primes. Since the Seive of Eratosthenes method generates prime numbers up to a given limit (k) and we want a given number of primes (n).


#### TDD the building of these key features:

## Structure

## To Run

- clone repository

```
git clone git@github.com:tobywinter/prime-generator.git
```
- run bundler

```
bundle install
```

Once in the prime-generator directory

- run the tests

```
open SpecRunner.html
```

- run the App in the console

```

```

## Screenshots
#### Running the App

![Running the App](imgs/run_app.png)

#### Displaying the results
![Displaying the results](imgs/results_display.png)


## Improvements

Given time to develop:
- I would build a front-end one page display.
