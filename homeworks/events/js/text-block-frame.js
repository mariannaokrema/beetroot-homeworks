// Створюємо div для блоку тексту
const textBlock = document.createElement('div');
textBlock.id = 'text-block';
textBlock.contentEditable = true;
textBlock.innerHTML =
  '<p>Ось текстовий блок, який можна змінювати за розміром.</p>';
document.body.appendChild(textBlock);

// Створюємо стилі для блоку тексту
const style = document.createElement('style');
style.textContent = `
    #text-block {
        border: 2px solid #000;
        width: 400px;
        height: 300px;
        overflow: auto;
        padding: 10px;
    }
`;
document.head.appendChild(style);

// Додаємо обробник події для ресайзу блоку
let isResizing = false;
let startPositionX, startPositionY, startWidth, startHeight;

textBlock.addEventListener('mousedown', (e) => {
  if (
    e.offsetX > textBlock.offsetWidth - 10 &&
    e.offsetY > textBlock.offsetHeight - 10
  ) {
    isResizing = true;
    startPositionX = e.clientX;
    startPositionY = e.clientY;
    startWidth = textBlock.offsetWidth;
    startHeight = textBlock.offsetHeight;

    window.addEventListener('mousemove', resizeBlock);
    window.addEventListener('mouseup', stopResizeBlock);
  }
});

const resizeBlock = (e) => {
  if (isResizing) {
    const newWidth = startWidth + (e.clientX - startPositionX);
    const newHeight = startHeight + (e.clientY - startPositionY);
    textBlock.style.width = newWidth + 'px';
    textBlock.style.height = newHeight + 'px';
  }
};

const stopResizeBlock = () => {
  isResizing = false;
  window.removeEventListener('mousemove', resizeBlock);
  window.removeEventListener('mouseup', stopResizeBlock);
};

export { resizeBlock, stopResizeBlock };
