const container = document.getElementById("singleproduct")

const urlParams = new URLSearchParams(window.location.search); // Création d'une constante qui va récupérer l'id du produit
const id = urlParams.get("id");
// console.log(id);

ajax("http://localhost:3000/api/teddies/" + id ) // Requête ajax qui va prendre en compte l'id du produit récupéré
  .then(function(data){
    // console.log(data) 
    buildProductDiv(data,container);
})
  .catch(error =>{
    console.error("Erreur lors de la requête: ", error);
    const errorMsg = singleproduct.appendChild(document.createElement("div"))
    errorMsg.classList.add("errorDiv")
    errorMsg.innerText = "Une erreur s'est produite, veuillez rafraîchir la page. Si le problème persiste vous pouvez contacter Orinoco directement."
});


const buildProductDiv = (ProductDiv,container) => {

    // Créer des éléments nécessaires pour construire une carte du produit
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    const h4b = document.createElement("h4");
    const img = document.createElement("img");
    const p = document.createElement("p");

    const colors = document.createElement("select") // On crée un select
    for (color of ProductDiv.colors){ // Pour chaque couleur de productDiv
      var option = document.createElement("option") // On crée une entrée
      option.value = color // Qui à la valeur des couleurs
      option.innerHTML = color // Et affiche les couleurs
      colors.append(option) // On place ces entrées dans le select
    }

    const button = document.createElement("button")

    const quantity = document.createElement("input")
    quantity.type = "number"  // Le type de "quantity" est des chiffres/nombres
    quantity.value = "1" // La valeur de base est 1
    quantity.pattern="[0-9]+" // On crée un pattern où on ne peut utiliser que des chiffres ( pas de lettres )
    quantity.setAttribute("pattern", "[0-9]+") // On met l'attribut pattern à quantity
  
    // Ajouter les éléments nouvellement créés dans le DOM
    container.append(div);
    div.append(h2);
    div.append(img);
    div.append(h3);
    div.append(p);
    div.append(h4)
    div.append(colors);
    div.append(h4b)
    div.append(quantity);
    div.append(button);

    // Définition du contenu et des attributs
    h2.innerHTML = ProductDiv.name;
    img.setAttribute("src", ProductDiv.imageUrl);
    img.setAttribute("alt", "Image d'un teddy");
    h3.innerHTML = "Prix: " + ProductDiv.price + " €";
    div.setAttribute("class", "productcard");
    p.innerHTML = ProductDiv.description
    h4.innerHTML = "Couleurs"
    h4b.innerHTML = "Quantité"

    button.innerHTML = "Ajouter au panier"
    button.setAttribute("data-product", JSON.stringify(ProductDiv)) // On crée un attribut "data-product" sur le bouton qui stringify les données de productdiv
    button.addEventListener("click", function(btnclick){ // Création d'un eventlistener sur le bouton quand on le clique, la fonction se lance
      // console.log("bouton cliqué");
      if (!quantity.checkValidity()){ // Si la quantité n'est pas composée que de chiffres..
        alert("Erreur , veuillez ne rentrer que des chiffres") // On afiche un message d'erreur
      }
      
    const product = JSON.parse(btnclick.target.getAttribute("data-product")) // On crée une constante "product" qui est égale au parsage de "data-products" au clic sur "btnclick"
    // console.log(product);
    
    const order = { // création d'une constante "order" qui est un objet, quand on clique sur le boutton
    id: product._id, // qui contient l'id du produit
    colors: colors.value, // la couleur qu'on a choisi 
    quantity: quantity.value, // et la quantité voulue
    name: product.name, // le nom
    price: product.price, // ainsi que le prix
    }

    cart.push(order) // On rajoute les données de "order" dans l'array "cart" crée avec getcart.js
    localStorage.setItem("cart",JSON.stringify(cart)) // On stocke l'array dans le local storage, et on le convertit en chaîne JSON

    if (confirm("Voulez vous voir votre panier?")){ // Quand on clique sur le boutton on à l'option de voir le panier directement
      window.location.href = "panier.html" // On spécifie l'url du panier
    }})
    
  };



