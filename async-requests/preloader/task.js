const loader = document.getElementById('loader');
const items = document.getElementById('items');
const xhr = new XMLHttpRequest();
const storage = window.localStorage;
let valutes = JSON.parse(storage.getItem("Valute"));

const drowElements = () => {
    loader.classList.remove('loader_active');
    for (let valute in valutes) {
        const item = document.createElement('div');
        items.appendChild(item);
        item.classList.add('item');
        item.insertAdjacentHTML('afterBegin',
            `<div class="item__code">${valutes[valute].CharCode}</div>
        <div class="item__value">${valutes[valute].Value}</div>
        <div class="item__currency">руб.</div>`);
    }
}

if (!valutes) {
    console.log('загрyзка с сервера');
    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
    xhr.send();
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            valutes = JSON.parse(xhr.response).response.Valute;
            storage.setItem("Valute", JSON.stringify(valutes));
            drowElements();
        }
    });
} 

else {
    console.log('загрyзка из кеша');
    drowElements();
}

