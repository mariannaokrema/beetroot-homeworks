function PerfectNumber(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }

  return sum === number;
}

console.log(PerfectNumber(6)); // Виведе true (6 - досконале число)
console.log(PerfectNumber(28)); // Виведе true (28 - досконале число)
console.log(PerfectNumber(12)); // Виведе false (12 - не досконале число)

export { PerfectNumber };
