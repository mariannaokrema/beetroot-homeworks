// Список покупок
let shoppingList = [
  { name: 'Bread', quantity: 1, bought: false, pricePerUnit: 25, total: 0 },
  { name: 'Soda', quantity: 2, bought: true, pricePerUnit: 10, total: 0 },
  { name: 'Eggs', quantity: 12, bought: false, pricePerUnit: 2, total: 0 },
  { name: 'Butter', quantity: 1, bought: false, pricePerUnit: 40, total: 0 },
];

// Функція виведення списку придбаних продуктів на екран
function printBoughtProducts() {
  const boughtItems = shoppingList.filter((item) => item.bought);

  console.log('\nBought products:');
  boughtItems.forEach((item) => {
    console.log(
      `${item.name} - quantity: ${item.quantity}, price per unit: ${item.pricePerUnit}`
    );
  });
}

// Функція виведення списку непридбаних продуктів на екран
function printUnboughtProducts() {
  const unboughtItems = shoppingList.filter((item) => !item.bought);

  console.log('\nUnbought products:');
  unboughtItems.forEach((item) => {
    console.log(
      `${item.name} - quantity: ${item.quantity}, price per unit: ${item.pricePerUnit}`
    );
  });
}

function buyProduct(productName, quantity, pricePerUnit) {
  const productIndex = shoppingList.findIndex(
    (item) =>
      item.name === productName &&
      item.quantity === quantity &&
      item.pricePerUnit === pricePerUnit
  );
  if (productIndex !== -1) {
    shoppingList[productIndex].bought = true;
    shoppingList[productIndex].total = quantity * pricePerUnit; // Оновлення значення total
    console.log(`${productName} bought.`);
  } else {
    console.log(`Product named '${productName}' is not found.`);
  }
}

// Функція видалення продукту зі списку
function removeProduct(productName) {
  shoppingList = shoppingList.filter((item) => item.name !== productName);
  // Оновлення значень total
  shoppingList.forEach((item) => {
    item.total = item.quantity * item.pricePerUnit;
  });
}

// Функція додавання покупки в список
function addPurchase(productName, quantity, pricePerUnit) {
  let existingItem = shoppingList.find((item) => item.name === productName);
  if (existingItem) {
    existingItem.quantity += quantity;
    existingItem.total += quantity * pricePerUnit;
  } else {
    let newItem = {
      name: productName,
      quantity: quantity,
      pricePerUnit: pricePerUnit,
      total: quantity * pricePerUnit,
      bought: false,
    };
    shoppingList.push(newItem);
  }
}

// Підрахунок суми всіх продуктів у списку
function calculateTotalQuantity() {
  let totalQuantity = 0;
  shoppingList.forEach((item) => {
    totalQuantity += item.quantity;
  });
  return totalQuantity;
}

// Підрахунок суми всіх придбаних або непридбаних продуктів у списку
function calculateTotalByBoughtStatus(isBought) {
  let total = 0;
  const filteredItems = shoppingList.filter((item) => item.bought === isBought);
  filteredItems.forEach((item) => {
    total += item.quantity * item.pricePerUnit;
  });
  return total;
}

// Сортування продуктів в залежності від кількості
function sortProductsByQuantity(ascending = false, bought = true) {
  const filteredItems = shoppingList.filter((item) => item.bought === bought);
  filteredItems.sort((a, b) => {
    return ascending ? a.quantity - b.quantity : b.quantity - a.quantity;
  });
  return filteredItems; // Повертаємо відсортований масив
}
// Зберігання масиву у локальному сховищі
localStorage.setItem('shoppingList', JSON.stringify(shoppingList));

// Для отримання масиву з локального сховища
let storedShoppingList = JSON.parse(localStorage.getItem('shoppingList'));
console.log(storedShoppingList);

export default {
  printUnboughtProducts,
  printBoughtProducts,
  addPurchase,
  removeProduct,
  sortProductsByQuantity,
  buyProduct,
  calculateTotalQuantity,
  calculateTotalByBoughtStatus,
};
