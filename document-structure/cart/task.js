const products = Array.from(document.querySelectorAll('.product'));
const basket = document.querySelector('.cart__products');

for (let product of products) {

    const createCart = () => {
        const el = document.createElement('div');
        basket.appendChild(el);
        el.classList.add('cart__product');
        el.dataset.id = product.dataset.id;
        el.insertAdjacentHTML('afterBegin',
            `<img class="cart__product-image" src=${product.querySelector('img').src}>
            <div class="cart__product-count">
            ${product.querySelector('.product__quantity-value').innerText}</div>`);
        return el;
    }

    product.querySelector('.product__quantity').addEventListener('click', (el) => {

        if (el.target.classList.contains('product__quantity-control_dec')) {
            if (product.querySelector('.product__quantity-value').innerText > 1) {
                product.querySelector('.product__quantity-value').innerText--;
            }
        }

        if (el.target.classList.contains('product__quantity-control_inc')) {
            product.querySelector('.product__quantity-value').innerText++;
        }

        if (el.target.classList.contains('product__add')) {

            const cards = Array.from(document.querySelectorAll('.cart__product'));

            const productInCart = cards.find((e) => {
                if (e.dataset.id === product.dataset.id) {
                    console.log('нашел: ', e)
                    return e;
                }
            });

            if (productInCart) {
                productInCart.querySelector('.cart__product-count').innerText = 
                Number(productInCart.querySelector('.cart__product-count').innerText) +
                Number(product.querySelector('.product__quantity-value').innerText);
            } else {
                createCart();
            }

        }
    });




}