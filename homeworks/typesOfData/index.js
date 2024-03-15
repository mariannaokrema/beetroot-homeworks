// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

const sum = Number((0.1 + 0.2).toFixed(1));
console.log(sum);
console.log(typeof sum);

// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

const stringNumber = '1';
const ordinaryNumber = 2;

const sum2 = Number(stringNumber) + ordinaryNumber;

console.log(sum2);

// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

const flashCapacityGB = prompt(
  "What's the capacity of your flash drive (in GB)"
);
const flashCapacityMB = flashCapacityGB * 1024;
const fileSizeMB = 820;

const amountOfFiles = Math.floor(flashCapacityMB / fileSizeMB);

console.log(
  'Your flash can place ' + amountOfFiles,
  "files, which's size is 820 MB "
);

// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
const walletAmountOfMoney = Number(
  prompt('How much money is in your wallet right now? (hryvnias)')
);

const chocolatePrice = Number(
  prompt(
    'What is the price for one bar of your favourite chocolate? (hryvnias)'
  )
);

const amountOfChocolate = Math.floor(walletAmountOfMoney / chocolatePrice);

const change = walletAmountOfMoney - amountOfChocolate * chocolatePrice;

console.log('You can buy ' + amountOfChocolate + ' chocolate bars.');
console.log(
  'You will have ' + change.toFixed(2) + ' hryvnias left in your wallet.'
);

// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

const number = prompt(
  'Enter a three-digit number and i will show you a reversed variant of it:'
);
const reversedNumber = number.split('').reverse().join('');

console.log('The reversed variant of your number is :', reversedNumber);

// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.

const depositAmount = Number(
  prompt(
    'Enter the amount of money you want to deposit in the bank (hryvnias):'
  )
);

const annumlInterestRate = 5;
const monthlyInterestRate = annumlInterestRate / 12 / 100;

const numberOfMonths = 2;
const interestAmount = depositAmount * monthlyInterestRate * numberOfMonths;

console.log(
  'Amount of accrued interest for 2 months:',
  interestAmount.toFixed(2)
);
