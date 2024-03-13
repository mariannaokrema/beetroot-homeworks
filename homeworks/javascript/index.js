// Норма
// перший пункт
const userName = prompt('Tell me your name');

console.log('Welcome, ', userName, '!');

// другий пункт
const YEAR = 2024;

const birthdate = +prompt('What is your birthyear?');

console.log('Your age is: ', YEAR - birthdate, 'y.o.');

// третій пункт
const squareSide = prompt(
  'What is the length of a side of a square? (in сantimeters)'
);

console.log('The perimeter of a square is: ', squareSide * 4, 'cm');

// Максимум
// перший пункт
const circleRadius = prompt('Tell me a radius of a circle');

const area = Math.PI * circleRadius ** 2;

console.log('Area of ​​a circle ', area, 'см^2');

// другий пункт
const distance = prompt(
  'Indicate the distance to your destination (in kilometers) '
);
const time = prompt('Indicate the time you want to spend on the road (hours)');

console.log(
  'If you want to get to a destination in time, then you should travel on speed: ',
  distance / time,
  'kph'
);
// третій

const currency = 0.91; //the currency of dollar in euro in 2024

const dollars = prompt(
  'Let me convert your dollars into euro (write down the amount of dollars you would like to change)'
);

const euro = dollars * currency;

console.log(dollars + ' dollars are equal to ' + euro + ' euros');
