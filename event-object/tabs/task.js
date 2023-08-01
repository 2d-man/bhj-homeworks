const tabs = Array.from(document.querySelectorAll('.tab'));
const contents = Array.from(document.querySelectorAll('.tab__content'));

for (let n = 0; n < tabs.length; n++) {
    tabs[n].addEventListener('click', () => {
        console.log(n + ' инициализировался');

        if (document.querySelector('.tab_active') && document.querySelector('.tab__content_active')) {
            document.querySelector('.tab_active').classList.remove('tab_active');
            document.querySelector('.tab__content_active').classList.remove('tab__content_active');

        }

        tabs[n].classList.add('tab_active');
        contents[n].classList.add('tab__content_active');
    });
}
