import productListFunctions from './js/product-list-1.js';

// Вивід початкового списку непридбаних продуктів
console.log('Initial unbought products:');
productListFunctions.printUnboughtProducts();

// Додавання покупок в список та купівля продукту
console.log('\nAdding milk and bread:');
productListFunctions.addPurchase('Milk', 1, 20);
productListFunctions.addPurchase('Bread', 2, 10);
productListFunctions.printUnboughtProducts();

productListFunctions.buyProduct('Butter', 1, 40);
console.log('\nAfter buying butter:');
productListFunctions.printBoughtProducts();
productListFunctions.printUnboughtProducts();

// Видалення хлыбу зы списку
productListFunctions.removeProduct('Bread');
console.log('\nAfter removing bread:');
productListFunctions.printBoughtProducts();
productListFunctions.printUnboughtProducts();
// Підрахунок та вивід суми всіх продуктів у списку
console.log(
  '\nTotal quantity of products:',
  productListFunctions.calculateTotalQuantity()
);

// Підрахунок та вивід суми придбаних та непридбаних продуктів
console.log(
  'Total cost of bought products:',
  productListFunctions.calculateTotalByBoughtStatus(true)
);
console.log(
  'Total cost of unbought products:',
  productListFunctions.calculateTotalByBoughtStatus(false)
);

// Сортування куплених продуктів за кількістю в порядку спадання
console.log('Bought products sorted by quantity (descending):');
const boughtProductsSortedByQuantity =
  productListFunctions.sortProductsByQuantity(false, true);
boughtProductsSortedByQuantity.forEach((item) => {
  console.log(`${item.name} - quantity: ${item.quantity}`);
});

// Сортування некуплених продуктів за кількістю в порядку спадання
console.log('Unbought products sorted by quantity (descending):');
const unboughtProductsSortedByQuantity =
  productListFunctions.sortProductsByQuantity(false, false);
unboughtProductsSortedByQuantity.forEach((item) => {
  console.log(`${item.name} - quantity: ${item.quantity}`);
});
