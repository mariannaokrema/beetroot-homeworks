const car = {
  manufacturer: 'BMW',
  model: 'X5',
  year: 2020,
  size: 2000,
  averageSpeed: 100,
  fuelTankCapacity: 60,
  averageFuelConsumption: 8,
  drivers: [],

  // Метод, який виводить на екран інформацію про автомобіль.
  showCharacteristics() {
    console.log(`Manufacturer: ${this.manufacturer}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Size: ${this.size}`);
    console.log(`Average Speed: ${this.averageSpeed} km/h`);
    console.log(`Fuel Tank Capacity: ${this.fuelTankCapacity} liters`);
    console.log(
      `Average Fuel Consumption: ${this.averageFuelConsumption} liters/100km`
    );
    console.log(`Drivers: ${this.drivers.join(', ')}`);
  },

  // додавання імені водія у список
  addDriver(driverName) {
    this.drivers.push(driverName);
  },

  // перевірка водія на наявність його імені у списку
  checkDriver(driverName) {
    return this.drivers.includes(driverName);
  },

  // підрахунок необхідного часу та кількості палива для подолання переданої відстані
  calculateTimeAndFuel(distance) {
    const hours = distance / this.averageSpeed; // загальний час в годинах
    const breaksCount = Math.floor(hours / 4); // кількість перерв
    const totalHours = hours + breaksCount; // загальний час з перервами

    // кількшсть палива
    const totalFuel = (distance / 100) * this.averageFuelConsumption;

    return { totalHours, totalFuel };
  },
};

// Приклад використання
car.showCharacteristics();
car.addDriver('John');
console.log(car.checkDriver('John')); // true
console.log(car.checkDriver('Alice')); // false

const distance = 500; // відстань в км
const { totalHours, totalFuel } = car.calculateTimeAndFuel(distance);
console.log(`Total time required: ${totalHours} hours`);
console.log(`Total fuel required: ${totalFuel} liters`);

// Створити об'єкт, що описує час (
const time = {
  hours: 0,
  minutes: 0,
  seconds: 0,

  //виведення часу на екран
  displayTime() {
    console.log(
      `${this.hours.toString().padStart(2, '0')}:${this.minutes
        .toString()
        .padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}`
    );
  },

  //зміна часу на передану кількість секунд
  changeSeconds(sec) {
    this.seconds += sec;
    this.normalizeTime();
  },

  // зміна часу на передану кількість хвилин
  changeMinutes(min) {
    this.minutes += min;
    this.normalizeTime();
  },

  //зміна часу на передану кількість годин
  changeHours(hr) {
    this.hours += hr;
    this.normalizeTime();
  },

  // Функція для нормалізації часу (корекція хвилин і годин)
  normalizeTime() {
    let extraSeconds = Math.floor(this.seconds / 60);
    this.seconds %= 60;
    this.minutes += extraSeconds;

    let extraMinutes = Math.floor(this.minutes / 60);
    this.minutes %= 60;
    this.hours += extraMinutes;

    this.hours %= 24;
  },
};

// Приклад використання
time.displayTime(); // виведе "00:00:00"
time.changeSeconds(150); //плюс 150 секунд
time.displayTime(); // виведе "00:02:30"
time.changeMinutes(75); // плюс 75 хвилин
time.displayTime(); // виведе "01:17:30"
time.changeHours(5); // плюс 5 годин
time.displayTime(); // виведе "06:17:30"
