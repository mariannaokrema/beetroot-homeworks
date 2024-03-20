// *Створи функцію, яка буде виводити кількість переданих їй аргументів.

function countArguments() {
  var input = prompt('Введіть аргументи, розділені пробілами:');

  var args = input.split(' ');

  console.log('Кількість переданих аргументів: ' + args.length);
}

countArguments();

export { countArguments };
