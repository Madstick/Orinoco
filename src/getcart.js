function getcart(dataJSON){
  let cart; 
  if(dataJSON === undefined ){ // Si dataJSON n'est pas défini
  cart = []; // Cart est un array vide
  }
  else{
    cart = JSON.parse(dataJSON) // Sinon on le parse
  } 
  return cart
}
let cart = getcart(localStorage.cart); // On crée une variable cart qui est égale au localstorage