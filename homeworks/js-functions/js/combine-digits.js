function combineDigits() {
  const digit1 = prompt('Enter the first digit:');
  const digit2 = prompt('Enter the second digit:');
  const digit3 = prompt('Enter the third digit:');

  let combinedNumber = Number([digit1, digit2, digit3].join(''));

  return combinedNumber;
}

let combined = combineDigits();
console.log('The combined number is: ' + combined);

export { combineDigits };
