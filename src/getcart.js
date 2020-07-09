let cart = localStorage.cart; // On crée une variable cart qui est égale au localstorage
if(cart === undefined ){ // Si cart n'est pas défini
cart = []; // Cart est un array
}
else{
  cart = JSON.parse(cart) // Sinon on le parse
}
