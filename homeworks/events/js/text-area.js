const convertToTextarea = () => {
  const editor = document.getElementById('editor');
  const text = editor.innerText;
  const textarea = document.createElement('textarea');
  textarea.value = text;
  editor.replaceWith(textarea);
  textarea.focus();
  document.addEventListener('keydown', saveWithCtrlS);
};

const convertToDiv = () => {
  const textarea = document.querySelector('textarea');
  const text = textarea.value;
  const editor = document.createElement('div');
  editor.id = 'editor';
  editor.innerText = text;
  textarea.replaceWith(editor);
  editor.focus();
  document.removeEventListener('keydown', saveWithCtrlS);
};

const saveWithCtrlS = (event) => {
  if (event.keyCode === 83 && event.ctrlKey) {
    // Ctrl + S
    event.preventDefault();
    convertToDiv();
  }
};

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 69 && event.ctrlKey) {
    // Ctrl + E
    event.preventDefault();
    convertToTextarea();
  }
});

export { convertToTextarea, convertToDiv, saveWithCtrlS };
