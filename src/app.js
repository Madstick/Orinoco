const container = document.getElementById("products")

ajax("http://localhost:3000/api/teddies").then(function(data){ // On fait la requête ajax puis on fait une promesse avec la fonction qui a comme paramètre "data"
  // console.log(data)
  for(let teddyInfo of data){ // Pour chaque "teddyinfo" de data
  buildTeddyDiv(teddyInfo,container); // On crée un "buildTeddyDiv" contenant les données recues par le serveur, et son container
 } 
}).catch(error =>{
  console.error("Erreur lors de la requête: ", error);
  const errorMsg = products.appendChild(document.createElement("div"))
  errorMsg.classList.add("errorDiv")
  errorMsg.innerText = "Une erreur s'est produite, veuillez rafraîchir la page. Si le problème persiste vous pouvez contacter Orinoco directement."
});

const buildTeddyDiv = (TeddyDiv,container) => {
  // Créer des éléments nécessaires pour construire une carte des produits
  const div = document.createElement("div"); 
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const a = document.createElement("a");
  const img = document.createElement("img");
  // Ajouter les éléments nouvellement créés dans le DOM
  container.append(div);
  div.append(h2);
  div.append(img);
  div.append(h3);
  p.append(a);
  div.append(p);
  // Définir le contenu et les attributs
  div.setAttribute("class", "card");
  h2.innerHTML = TeddyDiv.name;
  a.innerHTML = "Voir ce modèle";
  a.setAttribute("href", "produit.html?id=" + TeddyDiv._id);
  a.setAttribute("class", "productbutton");
  img.setAttribute("src", TeddyDiv.imageUrl);
  img.setAttribute("alt", "Image d'un teddy");
  h3.innerHTML = "Prix: " + TeddyDiv.price + " €";
};