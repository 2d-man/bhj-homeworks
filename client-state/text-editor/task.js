const editor = document.getElementById('editor');
const card = document.querySelector('.card');
const storage = window.localStorage;
let text = storage.getItem("text");

const el = document.createElement('button');
el.innerText = 'Очистить содержимое';
el.addEventListener('click', () => {
    editor.value = '';
    storage.clear();
});
card.appendChild(el);

if (text) {
    editor.value = text;
}

editor.addEventListener('input', () => {
    storage.setItem("text", editor.value);
})
