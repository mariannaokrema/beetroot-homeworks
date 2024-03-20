const factorial = (function () {
  function calculateFactorial(n) {
    return n !== 1 ? n * calculateFactorial(n - 1) : 1;
  }

  return function () {
    let input = prompt('Введіть число для обчислення факторіалу:');

    if (!input || isNaN(input)) {
      return 'Будь ласка, введіть дійсне число';
    }

    let num = Number(input);

    if (num < 0) {
      return "Я не можу визначити факторіал для від'ємного числа";
    }

    let result = calculateFactorial(num);
    return result;
  };
})();

let inputFactorial = factorial();
console.log('Факторіал введеного числа: ' + inputFactorial);

export { factorial, inputFactorial };
