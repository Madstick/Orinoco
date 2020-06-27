let cart = localStorage.cart;
if(cart === undefined ){
cart = [];
}
else{
  cart= JSON.parse(cart)
}
