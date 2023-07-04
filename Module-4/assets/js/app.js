import { addToCart, getCartItems } from './cart.js';
import products from "./product.js";

const cartPopup = document.querySelector('#cartPopup');
const cartBtn = document.querySelector('.header-cart');
const popupCloseBtn = document.querySelector('.popup-close');

const notification = document.querySelector('.notification');



popupCloseBtn.addEventListener('click', closePopup);

cartBtn.addEventListener('click', openPopup);

// open popup
function closePopup (){
    cartPopup.classList.add('hidden');
}

// close popup
function openPopup (){
    cartPopup.classList.remove('hidden');
}


// Show products 
products.map((item)=>{
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

addToCartBtns.forEach((btn)=>{
    btn.addEventListener('click', (e) =>{
        const productId = Number(e.target.parentNode.querySelector('.item-num').innerText);
        const product = products.find(p => p.id === productId);

        console.log(product, "Product")
        const quantity = 1;

        
        if (product && quantity > 0) {
            addToCart(product, quantity);
            displayCartItems();
          }

    });
});


function displayCartItems (){
    const cartBody = document.querySelector('.cart-body');
    const cartItems = getCartItems ();

    console.log(cartItems, "cartItems in DisplayCartItems");

    cartItems.forEach((item)=>{
        console.log(item, "Cart item item");
        cartBody.innerHTML += `
            <div class="item flex justify-between items-center">
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
            <span class="item-total-price">$${item.product.price}</span>
            <button
            class="remove-item p-2 px-5 bg-red-700 text-white rounded-lg"
            >
            remove
            </button>
        </div>`;
    });
    
    // sumOfAllItemPrice();
}





