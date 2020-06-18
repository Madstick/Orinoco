ajax('http://localhost:3000/api/teddies').then(function(data){
  console.log(data)
  const container = document.getElementById('products')
  for(let teddyInfo of data){
  buildTeddyDiv(teddyInfo,container);
 } 
}).catch(error =>{console.log(error)});
 

const buildTeddyDiv = (TeddyDiv,container) => {
  // Créer des éléments nécessaires pour construire une carte des produit
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const h4 = document.createElement("h4");
  const a = document.createElement("a");
  const img = document.createElement("img");
  // Ajouter les éléments nouvellement créés dans le DOM
  container.append(div);
  h3.append(a);
  div.append(h3);
  div.append(img);
  div.append(h4);
  // Définir le contenu et les attributs
  a.innerHTML = TeddyDiv.name;
  a.setAttribute("href", "produit.html?id=" + TeddyDiv._id);
  img.setAttribute("src", TeddyDiv.imageUrl);
  h4.innerHTML = TeddyDiv.price + " €";
  div.setAttribute("class", "card");
};