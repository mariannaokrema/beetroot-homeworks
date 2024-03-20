function calculateArea() {
  let length = parseFloat(prompt('Enter the length:'));
  let width = parseFloat(prompt('Enter the width:'));

  if (isNaN(length) || length <= 0 || isNaN(width) || width <= 0) {
    return 'Please enter valid positive numbers for length and width.';
  }

  if (width === undefined) {
    // Якщо передано лише один параметр, вважаємо, що це сторона квадрата
    return length * length; // Площа квадрата
  } else {
    return length * width; // Площа прямокутника
  }
}

console.log(calculateArea());

export { calculateArea };
