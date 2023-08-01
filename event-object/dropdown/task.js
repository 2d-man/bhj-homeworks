const buttons = Array.from(document.querySelectorAll('.dropdown__value'));
const dropdownList = Array.from(document.querySelectorAll('.dropdown__list'));
const links = Array.from(document.querySelectorAll('.dropdown__link'));

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        dropdownList[i].classList.toggle('dropdown__list_active');
    });
}

for (let i = 0; i < links.length; i++) {
    
    links[i].addEventListener('click', (event) => {
        event.preventDefault();
        
        links[i].closest('.dropdown').firstElementChild.innerText  = event.target.innerText;
    });
    
}
