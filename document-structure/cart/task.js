const products = Array.from(document.querySelectorAll('.product'));
const btns = Array.from(document.querySelectorAll('.product__add'));
const basket = document.querySelector('.cart__products');
let addingListener = true;



for (let product of products) {

    const checkBasket = () => {
        
        if (Array.from(basket.children).length > 0) {

            for (let productBasket of Array.from(basket.children)) {

                
                    productBasket.addEventListener('click', () => {
                        console.log('количество: ' + Number(productBasket.querySelector('.cart__product-count').innerText));
                        productBasket.querySelector('.cart__product-count').innerText--;
                        if (productBasket.querySelector('.cart__product-count').innerText < 1) {
                            productBasket.remove();
                        }
                    });
                    // addingListener = false;
                

                if (productBasket.dataset.id === product.dataset.id) {
                    productBasket.querySelector('.cart__product-count').innerText = Number(productBasket.querySelector('.cart__product-count').innerText) + Number(product.querySelector('.product__quantity-value').innerText);
                    return false
                }
            }

        }
        return true
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

            if (checkBasket()) {
                const elBasket = document.createElement('div');
                basket.appendChild(elBasket);
                elBasket.classList.add('cart__product');
                elBasket.dataset.id = product.dataset.id;
                elBasket.insertAdjacentHTML('afterBegin',
                    `<img class="cart__product-image" src=${product.querySelector('img').src}>
                    <div class="cart__product-count">${product.querySelector('.product__quantity-value').innerText}</div>`);
            }
        }
    });

}