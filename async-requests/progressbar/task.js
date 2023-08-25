const form = document.getElementById('form');
const progress = document.getElementById('progress');
const formData = new FormData(form);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', (e) => {
        progress.value =  e.loaded / e.total;
    });

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    const formData = new FormData(form);
    xhr.send(formData);
})