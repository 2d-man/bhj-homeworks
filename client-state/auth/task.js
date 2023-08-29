const form = document.getElementById('signin__form');
const idUser = document.getElementById('user_id');
const welcome = document.getElementById('welcome');
const signin = document.getElementById('signin');
const logout = document.getElementById('logout__btn');

const storage = window.localStorage;

let id = storage.getItem("id");

logout.addEventListener('click', (e) => {
    storage.removeItem('id');
    signin.classList.add('signin_active');
    welcome.classList.remove('welcome_active');
});

if (id) {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    idUser.textContent = id;
} else {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
        const formData = new FormData(form);
        xhr.send(formData);

        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === xhr.DONE) {
                let access = JSON.parse(xhr.response);
                if (access.success) {
                    storage.setItem("id", access.user_id);
                    signin.classList.remove('signin_active');
                    welcome.classList.add('welcome_active');
                    idUser.innerText = access.user_id;
                } else {
                    alert('Неверный логин/пароль');
                }
            }
        });
        form.reset();
    });
}