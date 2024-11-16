// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
}

// function fib(n) {
//   let series = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     series.push(series[i - 2] + series[i - 1]);
//   }

//   return series[n];
// }

// function fib(n, memo = {}) {
//   if (n < 2) return n;
//   if (memo[n]) return memo[n];

//   memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

//   return memo[n];
// }

function memoize(fn) {
  const cache = {};

  return function (...args) {
    if (cache[args]) return cache[args];
    cache[args] = fn.apply(this, args);
    return cache[args];
  };
}

fib = memoize(fib);

module.exports = fib;
