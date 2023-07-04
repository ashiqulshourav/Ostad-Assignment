let cartItems = [];

export function addToCart(product, quantity = 1) {
  const cartItem = cartItems.find(item => item.product.id === product.id);
  console.log(cartItem, "cartItem match")
  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cartItems.push({ product, quantity });
  }
  console.log(cartItems, "CartItems array")
}


export function getCartItems() {
  return cartItems;
}

export function clearCart() {
  cartItems = [];
}



const quantityIncBtns = document.querySelectorAll('.quan-inc');
    const quantityDecBtns = document.querySelectorAll('.quan-dec');
    const removeItemBtns = document.querySelectorAll('.remove-item');

    [...removeItemBtns].map((btn)=>{
        btn.addEventListener('click', function(){
            let id = this.parentNode;
            console.log(id)
        });
    });


    // Quantity Increment
    quantityIncBtns.forEach((btn)=>{
        btn.addEventListener('click', function(){
            let itemQuantity = this.parentNode.querySelector('.item-quantity');
            let quantity = itemQuantity.innerText;
            let item = this.parentNode.parentNode.querySelector('.item-total-price');
            let itemPrice = Number(this.parentNode.parentNode.querySelector('.item-price').innerText.replace("$",""));
            if(quantity > 0){
                quantity++;
                itemQuantity.innerText = quantity;
                individualItemPriceUpdate(quantity, itemPrice, item)
            }
        });    
    });

    // Quantity Decreament
    quantityDecBtns.forEach((btn)=>{
        btn.addEventListener('click', function(){
            let itemQuantity = this.parentNode.querySelector('.item-quantity');
            let quantity = itemQuantity.innerText;
            let item = this.parentNode.parentNode.querySelector('.item-total-price')
            let itemPrice = Number(this.parentNode.parentNode.querySelector('.item-price').innerText.replace("$",""));
            if(quantity > 1){
                quantity--;
                itemQuantity.innerText = quantity;
                individualItemPriceUpdate(quantity, itemPrice, item);
            }
        })
    });


    function individualItemPriceUpdate (quantity, price, item){
        item.innerText = "$" + quantity * price;
        sumOfAllItemPrice();
    }


    function sumOfAllItemPrice(){
        const items = document.querySelectorAll('.item-total-price');
        let grandTotal = document.querySelector('.grand-total');
        let sum = 0;

        [...items].map((item)=>{
            sum += Number(item.innerText.replace("$",""));
        });

        grandTotal.innerText = `$${sum}`;
    }

    sumOfAllItemPrice();