function combineDigits() {
  let digit1 = prompt('Enter the first digit:');
  let digit2 = prompt('Enter the second digit:');
  let digit3 = prompt('Enter the third digit:');

  let combinedNumber = Number([digit1, digit2, digit3].join(''));

  return combinedNumber;
}

let combined = combineDigits();
console.log('The combined number is: ' + combined);

export { combineDigits, combined };
