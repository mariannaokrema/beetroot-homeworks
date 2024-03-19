// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
let age = prompt('Enter your age');

if (!isNaN(age)) {
  age = parseInt(age);

  switch (true) {
    case age >= 0 && age <= 11:
      console.log('Ви - дитина');
      break;
    case age >= 12 && age <= 17:
      console.log('Ви - підліток');
      break;
    case age >= 18 && age <= 59:
      console.log('Ви - доросла людина');
      break;
    case age >= 60 && age <= 101:
      console.log('Ви - пенсіонер');
      break;
    default:
      console.log('Please, type a proper age value!');
  }
}

// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
let number = prompt('Введіть будь-яке число від 0 до 9');

if (!isNaN(number)) {
  number = parseInt(number);

  switch (number) {
    case 0:
      console.log(')');
      break;
    case 1:
      console.log('!');
      break;
    case 2:
      console.log('@');
      break;
    case 3:
      console.log('#');
      break;
    case 4:
      console.log('$');
      break;
    case 5:
      console.log('%');
      break;
    case 6:
      console.log('^');
      break;
    case 7:
      console.log('&');
      break;
    case 8:
      console.log('*');
      break;
    case 9:
      console.log('(');
      break;
    default:
      console.log('You entered a number outside the range 0 to 9.');
  }
} else {
  console.log('Invalid value entered. Please enter a number between 0 and 9.');
}

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
let agree2 = confirm(
  'Чи готові придумати діапазон чисел, щоб я змогла підрахувати суму всіх чисел у ньому ?'
);

if (agree2) {
  let start = parseInt(prompt('Введіть початкове число діапазону:'));
  let end = parseInt(prompt('Введіть кінцеве число діапазону:'));

  if (!isNaN(start) && !isNaN(end)) {
    let sum = 0;

    if (start <= end) {
      for (let i = start; i <= end; i++) {
        sum += i;
      }
      console.log(
        `Сума чисел в діапазоні від ${start} до ${end} дорівнює: ${sum}`
      );
    } else {
      console.log(
        'Початкове число діапазону повинно бути менше або дорівнювати кінцевому числу.'
      );
    }
  } else {
    console.log('Введено некоректні дані. Будь ласка, введіть числа.');
  }
} else {
  console.log('Ви скасували операцію або не згодилися запускати обчислення.');
}

// Запитай у користувача 2 числа і знайди найбільший спільний дільник.

// Запитай у користувача число і виведи всі дільники цього числа.

let number2 = parseInt(prompt('Введіть число:'));

if (!isNaN(number2)) {
  console.log(`Дільники числа ${number2}:`);

  for (let i = 1; i <= number2; i++) {
    if (number2 % i === 0) {
      console.log(i);
    }
  }
} else {
  console.log('Введено некоректне число. Будь ласка, введіть число.');
}

// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

let number3 = prompt('Введіть п’ятирозрядне число:');

if (number3.length === 5) {
  let reversedNumber = number3.split('').reverse().join('');

  if (number3 === reversedNumber) {
    console.log(`${number3} - це паліндром.`);
  } else {
    console.log(`${number3} - це не паліндром.`);
  }
} else {
  console.log('Будь ласка, введіть п’ятирозрядне число.');
}

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:

let purchaseAmount = parseFloat(prompt('Введіть суму покупки:'));

if (!isNaN(purchaseAmount)) {
  let discount = 0;

  if (purchaseAmount >= 200 && purchaseAmount < 300) {
    discount = 0.03; // 3%
  } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
    discount = 0.05; // 5%
  } else if (purchaseAmount >= 500) {
    discount = 0.07; // 7%
  }

  let discountedAmount = purchaseAmount - purchaseAmount * discount;

  console.log(`Сума до оплати зі знижкою: ${discountedAmount.toFixed(2)}`);
} else {
  console.log('Будь ласка, введіть коректну суму покупки.');
}

// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
let numbers = prompt('Введіть 10 чисел, розділені пробілами:');

let numbersArray = numbers.split(' ');

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < numbersArray.length; i++) {
  let number = parseFloat(numbersArray[i]); // Перетворити рядок на число

  if (!isNaN(number)) {
    if (number > 0) {
      positiveCount++;
    } else if (number < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }

    if (number % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
}

console.log(`Додатні: ${positiveCount}`);
console.log(`Від'ємні: ${negativeCount}`);
console.log(`Нулів: ${zeroCount}`);
console.log(`Парні: ${evenCount}`);
console.log(`Непарні: ${oddCount}`);

// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

let daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
let index = 0;

do {
  let nextDay = daysOfWeek[index];
  let userChoice = confirm(`${nextDay}. Хочеш побачити наступний день?`);

  if (userChoice) {
    index = (index + 1) % 7;
  } else {
    break;
  }
} while (true);

// Гра «Вгадай число».

let low = 0;
let high = 100;
let guessed = false;

const agree = confirm(
  'Загадайте число від 0 до 100 і я намагатимусь його відгадати, натисніть "OK", якщо ви готові.'
);

if (agree) {
  while (!guessed) {
    let mid = Math.floor((low + high) / 2);
    let userInput = prompt(
      `Ваше число > ${mid}, < ${mid} або == ${mid}? Введіть одне з цих значень: >, <, =`
    );

    if (userInput === '>') {
      low = mid + 1;
    } else if (userInput === '<') {
      high = mid - 1;
    } else if (userInput === '=') {
      console.log(`Ваше число: ${mid}`);
      guessed = true;
    } else {
      alert('Будь ласка, введіть правильне значення: >, <, =');
    }
  }
} else {
  alert('Добре, якщо ви не готові, ми можемо спробувати пізніше!');
}
