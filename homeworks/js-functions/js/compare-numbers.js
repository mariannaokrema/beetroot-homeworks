function compareNumbers() {
  const num1 = Number(prompt('Input the first number'));
  const num2 = Number(prompt('Input the second number'));

  if (isNaN(num1) || isNaN(num2)) {
    return 'Please enter a valid number';
  }

  if (num1 < num2) {
    return -1;
  } else if (num1 > num2) {
    return 1;
  } else {
    return 0;
  }



}
const result = compareNumbers();
console.log('The result of comparison: ' + result);

export { compareNumbers, result };
