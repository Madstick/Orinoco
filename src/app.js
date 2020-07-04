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
  h2.innerHTML = TeddyDiv.name;
  a.innerHTML = "Voir ce modèle";
  a.setAttribute("href", "produit.html?id=" + TeddyDiv._id);
  a.setAttribute("class", "productbutton");
  img.setAttribute("src", TeddyDiv.imageUrl);
  h3.innerHTML = TeddyDiv.price + " €";
  div.setAttribute("class", "card");
};