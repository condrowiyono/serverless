function fibonacci(n = 10) {
  // attempt to convert n to an integer
  n = parseInt(n);
  if (isNaN(n)) {
    throw new Error('Invalid input');
  }

  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

exports.default = fibonacci;
