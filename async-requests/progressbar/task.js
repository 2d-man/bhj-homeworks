const xhr = new XMLHttpRequest();
const form = document.getElementById('form');
const progress = document.getElementById('progress');
const formData = new FormData(form);
let width = 0;
let id = 0;

const drowFrame = () => {
    if (width >= 100) {
        clearInterval(id);
        progress.value = 0.0;
    } else {
        width++;
        progress.value += 0.1;
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState !== xhr.DONE) {
            id = setInterval(drowFrame, 10);
        } else {
            clearInterval(id);
        }

    });

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    const formData = new FormData(form);

    xhr.send(formData);


})