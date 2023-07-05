let cartItems = [];

export function addToCart(product, quantity = 1) {
    const cartItem = cartItems.find(item => item.product.id === product.id);
    //   console.log(cartItem, "cartItem match")
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cartItems.push({ product, quantity });
    }
    //   console.log(cartItems, "CartItems array")
}


export function getCartItems() {
    return cartItems;
}

export function clearCart() {
    cartItems = [];
}