import { addToCart } from './cart.js';
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
            <span class="product-price">${item.price}$</span>
            <button
              class="add-to-cart bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
              Add to cart
              </button>
              </div>
              </div>
              `;
            })
            
            
            
            
const addToCartBtns = document.querySelectorAll('.add-to-cart');

addToCartBtns.forEach((btn)=>{
    btn.addEventListener('click', (e) =>{
        const productId = parseInt(e.target.parentNode.querySelector('.item-num').innerText);
        const product = products.find(p => p.id === productId);
        const quantity = 1;

        
        if (product && quantity > 0) {
            addToCart(product, quantity);
          }

    });
})
