// Оголошення змінних
const sortOrders = ['asc', 'desc'];
let currentSortOrder = sortOrders[0];

// Функції для створення заголовка та тіла таблиці
const createTableHeader = (headers) => {
  const tr = document.createElement('tr');
  headers.forEach((header, index) => {
    const th = document.createElement('th');
    th.textContent = header;
    th.onclick = () => sortTable(index); // Додаємо обробник подій onclick
    tr.appendChild(th);
  });
  return tr;
};

const createTableBody = (data) => {
  const tbody = document.createElement('tbody');
  data.forEach((rowData) => {
    const tr = document.createElement('tr');
    rowData.forEach((cellData) => {
      const td = document.createElement('td');
      td.textContent = cellData;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  return tbody;
};

// Створення елементів заголовка таблиці (thead)
const thead = createTableHeader(['Name', 'Age', 'Country']);

// Створення елементу тіла таблиці (tbody) та додавання рядків
const tbody = createTableBody([
  ['John', 25, 'USA'],
  ['Anna', 30, 'Germany'],
  ['Peter', 20, 'UK'],
]);

// Додавання заголовка та тіла таблиці до DOM
const table = document.createElement('table');
table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);

// Функція сортування
const sortTable = (columnIndex) => {
  const rows = table.querySelectorAll('tbody tr');
  const data = Array.from(rows).map((row) => {
    const cells = row.querySelectorAll('td');
    return Array.from(cells).map((cell) => cell.textContent);
  });

  data.sort((a, b) => {
    const columnValueA = a[columnIndex] || ''; // Перевірка на undefined
    const columnValueB = b[columnIndex] || ''; // Перевірка на undefined

    if (columnIndex === 1) {
      // Сортувати за числом (вік)
      return (
        (Number(columnValueA) - Number(columnValueB)) *
        (currentSortOrder === 'asc' ? 1 : -1)
      );
    } else {
      // Сортувати за текстом
      return (
        columnValueA.localeCompare(columnValueB) *
        (currentSortOrder === 'asc' ? 1 : -1)
      );
    }
  });

  const tbody = table.querySelector('tbody');
  tbody.innerHTML = '';
  data.forEach((rowData) => {
    const tr = document.createElement('tr');
    rowData.forEach((cellData) => {
      const td = document.createElement('td');
      td.textContent = cellData;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  // Змінити порядок сортування
  currentSortOrder =
    currentSortOrder === sortOrders[0] ? sortOrders[1] : sortOrders[0];

  // Оновлення візуалізації порядку сортування (необов'язково)
  updateHeaderIcons(columnIndex);
};

// Функція для візуалізації порядку сортування (необов'язково)
const updateHeaderIcons = (columnIndex) => {
  const headers = table.querySelectorAll('thead th');
  headers.forEach((header, index) => {
    header.classList.remove('sorted-asc', 'sorted-desc');
    if (index === columnIndex) {
      header.classList.add(
        currentSortOrder === 'asc' ? 'sorted-asc' : 'sorted-desc'
      );
    }
  });
};

// Експорт функції сортування
export { sortTable };
