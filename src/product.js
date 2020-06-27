const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id);

ajax('http://localhost:3000/api/teddies/' + id ).then(function(data){
console.log(data) 
const container = document.getElementById('singleproduct')
 buildProductDiv(data,container);
}).catch(error =>{console.log(error)});



const buildProductDiv = (ProductDiv,container) => {
    // Créer des éléments nécessaires pour construire une carte du produit
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const colors = document.createElement("select")
    for (color of ProductDiv.colors){
      var option = document.createElement("option")
      option.value = color
      option.innerHTML = color
      colors.append(option)
    }
    const button = document.createElement("button")
    const quantity = document.createElement("input")
    quantity.type = "number"
    quantity.value = "1"
    quantity.pattern="[0-9]+" 
    quantity.setAttribute("pattern", "[0-9]+")
  
    // Ajouter les éléments nouvellement créés dans le DOM
    container.append(div);
    div.append(h2);
    div.append(img);
    div.append(h3);
    div.append(p);
    div.append(h4)
    div.append(colors);
    div.append(quantity);
    div.append(button);
    // Définir le contenu et les attributs
    h2.innerHTML = ProductDiv.name;
    img.setAttribute("src", ProductDiv.imageUrl);
    h3.innerHTML = ProductDiv.price;
    div.setAttribute("class", "productcard");
    p.innerHTML = ProductDiv.description
    h4.innerHTML = "Couleurs :"
    button.innerHTML = "Ajouter au panier"
    button.setAttribute("data-product", JSON.stringify(ProductDiv))

    button.addEventListener("click", function(carttable){
      console.log("bouton cliqué");
      if (!quantity.checkValidity()){
        alert("Erreur , veuillez ne rentrer que des chiffres")
      }
    const product = JSON.parse(carttable.target.getAttribute("data-product"))
    console.log(product);
    
    const order = { // création d'une constante "order" quand on clique sur le boutton
    _id: id.innerText, // qui contient l'id du produit
    colors: colors.value, // la couleur qu'on a choisi 
    quantity: quantity.value, // et la quantité voulue
    name: product.name, // le nom
    price: product.price, // ainsi que le prix
    }

    cart.push(order)
    localStorage.setItem("cart",JSON.stringify(cart))

    const stringOrder = JSON.stringify(order) // On transforme l'objet en chaîne de caractère
    sessionStorage.setItem("newOrder", stringOrder) // On le stocke ensuite dans le storage local et on le nomme "newOrder"  
    })
    
  };



