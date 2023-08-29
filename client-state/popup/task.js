const popup = document.querySelector('.modal');
const popupClose = document.querySelector('.modal__close');

const setCookie = (name, value) => {
    document.cookie = name + '=' + encodeURIComponent(value);
}

const getCookie = (name) => {
    try {
        const pairs = document.cookie.split('; ');
        const cookie = pairs.find(p => p.startsWith(name + '='));
        return cookie.substring(name.length + 1);
    } catch {
        return null;
    }
}

// console.log(document.cookie)
if (!getCookie('close')) {
    popupClose.addEventListener('click', () => {
        popup.classList.remove('modal_active');
        setCookie('close', 'true');
    });

    document.addEventListener('DOMContentLoaded', () => {
        popup.classList.add('modal_active');
    });
}









