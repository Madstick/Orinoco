// Fonction de récupération et de création du panier  

const buildProductTable = (productTable,container) => {

const tr = document.createElement("tr")
const tda = document.createElement("td")
const tdb = document.createElement("td")
const tdc = document.createElement("td")
const tdd = document.createElement("td")
const tdf = document.createElement("td")
var subtotal = productTable.price*productTable.quantity

container.appendChild(tr)
tr.appendChild(tda)
tr.appendChild(tdb)
tr.appendChild(tdc)
tr.appendChild(tdd)
tr.appendChild(tdf)

tda.innerText = productTable.name
tdb.innerText = productTable.colors
tdc.innerText = productTable.price + " €"
tdd.innerText = productTable.quantity
tdf.innerText = subtotal + " €"

}

const container = document.getElementById("carttable")
let total = 0
for (let item of cart ){
    console.log(item);
    buildProductTable(item,container);
    total+=item.price*item.quantity;
}

const carttotal = document.getElementById("carttotal")
carttotal.innerHTML = total + " €"

const emptyButton = document.getElementById("empty")
    emptyButton.addEventListener("click", function () {
        localStorage.setItem("cart","[]");
        window.location.reload()
})

// Fonction de récupération et de soumission du formulaire

const submit = document.getElementById("submit")
submit.addEventListener("click", function(event){
    event.preventDefault()
        if (validateForm() === true)

    ajaxpost('http://localhost:3000/api/teddies/',cart)
    .then(function(postForm){
        window.location.href = "confirmation.html"
        const myOrder = JSON.stringify(postForm) 
        localStorage.setItem("myOrder", myOrder)
        localStorage.clear()
    })
    .catch(function (error) { 
        console.error("Erreur lors de la requête: ", error) 
    })

})