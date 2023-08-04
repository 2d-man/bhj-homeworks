const sizeButtons = Array.from(document.querySelectorAll('.font-size'));
const colorButtons = Array.from(document.querySelector('.book__control_color').children);
const backgroundButtons = Array.from(document.querySelector('.book__control_background').children);
const book = document.querySelector('.book');

for (let sizeButton of sizeButtons) {

    sizeButton.addEventListener('click', (event) => {
        event.preventDefault();

        for (let sizeButton of sizeButtons) {
            sizeButton.classList.remove('font-size_active');
        }

        book.classList.remove('book_fs-small', 'book_fs-big');
        sizeButton.classList.add('font-size_active');

        if (sizeButton.classList.contains('font-size_small')) {
            book.classList.add('book_fs-small');
        }

        if (sizeButton.classList.contains('font-size_big')) {
            book.classList.add('book_fs-big');
        }

    });
}

for (let colorButton of colorButtons) {

    colorButton.addEventListener('click', (event) => {
        event.preventDefault();

        for (let colorButton of colorButtons) {
            colorButton.classList.remove('color_active');
        }

        book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
        colorButton.classList.add('color_active');

        if (colorButton.classList.contains('text_color_black')) {
            book.classList.add('book_color-black');
        }

        if (colorButton.classList.contains('text_color_gray')) {
            book.classList.add('book_color-gray');
        }

        if (colorButton.classList.contains('text_color_whitesmoke')) {
            book.classList.add('book_color-whitesmoke');
        }

    });
}

for (let backgroundButton of backgroundButtons) {

    backgroundButton.addEventListener('click', (event) => {
        event.preventDefault();

        for (let backgroundButton of backgroundButtons) {
            backgroundButton.classList.remove('color_active');
        }

        book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
        backgroundButton.classList.add('color_active');

        if (backgroundButton.classList.contains('bg_color_black')) {
            book.classList.add('book_bg-black');
        }

        if (backgroundButton.classList.contains('bg_color_gray')) {
            book.classList.add('book_bg-gray');
        }

        if (backgroundButton.classList.contains('bg_color_white')) {
            book.classList.add('book_bg-white');
        }

    });
}