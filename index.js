var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 
 var price = Math.floor(Math.random() * 100) + 1;
 var cartItem = {
   itemName: `${item}`,
   itemPrice: price
 }
 cart.push(cartItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  
  var cartMessage = ""
  var cartItemCount = getCart().length
  if(cartItemCount === 0) {
    cartMessage = "Your shopping cart is empty."
  } 
  else {
    cartMessage = "In your cart, you have "
    
    
  return ''
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
