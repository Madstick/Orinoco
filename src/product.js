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
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    const a = document.createElement("a");
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
    h3.append(a);
    div.append(h3);
    div.append(img);
    div.append(h4);
    div.append(p);
    div.append(colors);
    div.append(quantity);
    div.append(button);
    // Définir le contenu et les attributs
    a.innerHTML = ProductDiv.name;
    a.setAttribute("href", "index.html");
    img.setAttribute("src", ProductDiv.imageUrl);
    h4.innerHTML = ProductDiv.price;
    div.setAttribute("class", "productcard");
    p.innerHTML = ProductDiv.description
    button.innerHTML = "Ajouter au panier"
    button.addEventListener("click", function(){
      console.log("bouton cliqué");
      if (!quantity.checkValidity()){
        alert("Erreur , veuillez ne rentrer que des chiffres")
      }  
    })
  };
