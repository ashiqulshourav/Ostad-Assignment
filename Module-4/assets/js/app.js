import { addToCart, clearCart, getCartItems } from './cart.js';
import products from "./product.js";

const cartPopup = document.querySelector('#cartPopup');
const cartBtn = document.querySelector('.header-cart');
const popupCloseBtn = document.querySelector('.popup-close');

let notification = document.querySelector('.notification');



popupCloseBtn.addEventListener('click', closePopup);

cartBtn.addEventListener('click', openPopup);

// open popup
function closePopup() {
    cartPopup.classList.add('hidden');
    getNotification();
}

// close popup
function openPopup() {
    cartPopup.classList.remove('hidden');
    displayCartItems();
}


// Show products 
products.map((item) => {
    document.querySelector('.items-inner').innerHTML += `
    <div class="item">
    <div class="item-inner flex justify-between items-center pt-8 w-[90%] max-w-5xl m-auto">
    <span class="item-num">${item.id}</span>
    <span class="item-name">${item.title.slice(0, 20)}</span>
    <span class="product-img max-w-[150px] max-h-[200px]">
    <img class="max-h-[200px]" src="${item.image}" alt="${item.description}" />
    </span>
            <span class="product-price">$${item.price}</span>
            <button
              class="add-to-cart bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
              Add to cart
              </button>
              </div>
              </div>
              `;
});

const addToCartBtns = document.querySelectorAll('.add-to-cart');

addToCartBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const productId = Number(e.target.parentNode.querySelector('.item-num').innerText);
        const product = products.find(p => p.id === productId);

        const quantity = 1;

        if (product && quantity > 0) {
            addToCart(product, quantity);
            getNotification();
        }
    });
});


function displayCartItems() {
    const cartBody = document.querySelector('.cart-body-content');
    const cartItems = getCartItems();

    // reset cartBody HTML
    cartBody.innerHTML = "";

    cartItems.forEach((item) => {
        cartBody.innerHTML += `
            <div class="item flex justify-between items-center py-2">
            <span class="item-id">${item.product.id}</span>
            <span class="item-name">${item.product.title.slice(0, 20)}</span>
            <div class="product-img max-w-[80px] max-h-[100px]">
            <img
                class="max-h-[50px]"
                src="${item.product.image}"
                alt="Hello"
            />
            </div>
            <span class="item-price">$${item.product.price}</span>
            <div class="quantity-box flex justify-between items-center">
            <button class="quan-dec px-2 py-1 bg-red-400 text-white">
                -
            </button>
            <span class="item-quantity px-4">${item.quantity}</span>
            <button class="quan-inc px-2 py-1 bg-gray-700 text-white">
                +
            </button>
            </div>
            <span class="item-total-price">$${item.product.price * item.quantity}</span>
            <button
            class="remove-item p-2 px-5 bg-red-700 text-white rounded-lg"
            >
            remove
            </button>
        </div>`;
    });


    sumOfAllItemPrice();

    const quantityIncBtns = document.querySelectorAll('.quan-inc');
    const quantityDecBtns = document.querySelectorAll('.quan-dec');
    const removeItemBtns = document.querySelectorAll('.remove-item');
    const clearCartBtn = document.querySelectorAll('.clear-cart');


    // Quantity Increment
    quantityIncBtns.forEach((btn) => {
        btn.addEventListener('click', function() {
            const productId = Number(this.parentNode.parentNode.querySelector('.item-id').innerText);
            const cartItem = cartItems.find(item => item.product.id === productId);

            let itemQuantity = this.parentNode.querySelector('.item-quantity');
            let item = this.parentNode.parentNode.querySelector('.item-total-price');
            let itemPrice = cartItem.product.price.toFixed(2);


            if (cartItem.quantity > 0) {
                cartItem.quantity++;
                itemQuantity.innerText = cartItem.quantity;
                individualItemPriceUpdate(cartItem.quantity, itemPrice, item);
            }
        });
    });


    // Quantity Decrement
    quantityDecBtns.forEach((btn) => {
        btn.addEventListener('click', function() {
            const productId = Number(this.parentNode.parentNode.querySelector('.item-id').innerText);
            const cartItem = cartItems.find(item => item.product.id === productId);

            let itemQuantity = this.parentNode.querySelector('.item-quantity');
            let item = this.parentNode.parentNode.querySelector('.item-total-price');
            let itemPrice = cartItem.product.price.toFixed(2);


            if (cartItem.quantity > 1) {
                cartItem.quantity--;
                itemQuantity.innerText = cartItem.quantity;
                individualItemPriceUpdate(cartItem.quantity, itemPrice, item);
            }
        });
    });

    // remove individual item
    removeItemBtns.forEach((btn) => {
        btn.addEventListener('click', function() {
            const productId = Number(this.parentNode.querySelector('.item-id').innerText);
            const cartItem = cartItems.find(item => item.product.id === productId);

            // Remove the item from the cartItems array
            const itemIndex = cartItems.findIndex(item => item.product.id === productId);
            cartItems.splice(itemIndex, 1);

            // Regenerate the cart body HTML
            displayCartItems();
        });
    });

    // clear cart
    clearCartBtn.forEach((btn) => {
        btn.addEventListener('click', function() {
            clearCart();
            displayCartItems();
        });
    });
}



function getNotification() {
    const items = getCartItems();
    if (items.length === 0) {
        notification.classList.remove('active');
    } else {
        notification.classList.add('active');
        notification.innerText = items.length;
    }
}


function individualItemPriceUpdate(quantity, price, item) {
    let total = quantity * price
    item.innerText = "$" + total.toFixed(2);
    sumOfAllItemPrice();
}



function sumOfAllItemPrice() {
    const items = document.querySelectorAll('.item-total-price');
    let grandTotal = document.querySelector('.grand-total');
    let sum = [...items].reduce((acc, item) => {
        return acc + Number(item.innerText.replace('$', ""));
    }, 0);

    grandTotal.innerText = `$${sum.toFixed(2)}`;
}