const errorMsg = document.getElementById("errorMsg")
const container = document.getElementById("carttable")
const carttotal = document.getElementById("carttotal")
const emptyButton = document.getElementById("empty")

const firstName = document.getElementById("firstname")
const lastName = document.getElementById("lastname")
const address = document.getElementById("address")
const city = document.getElementById("city")
const date = document.getElementById("date")
const email = document.getElementById("email")

const submit = document.getElementById("submit")

// Fonction de récupération et de création du panier  

const buildProductTable = (productTable,container) => { // Création d'une fonction  

    const tr = document.createElement("tr")
    const tda = document.createElement("td")
    const tdb = document.createElement("td")
    const tdc = document.createElement("td")
    const tdd = document.createElement("td")
    const tdf = document.createElement("td")
    var subtotal = productTable.price*productTable.quantity // Création d'une variable subtotal qui est égale au prix multiplié par la quantité

    // Ajouter les éléments nouvellement créés dans le DOM
    container.appendChild(tr)
    tr.appendChild(tda)
    tr.appendChild(tdb)
    tr.appendChild(tdc)
    tr.appendChild(tdd)
    tr.appendChild(tdf)

    // Définition du contenu et des attributs
    tda.innerText = productTable.name
    tdb.innerText = productTable.colors
    tdc.innerText = productTable.price + " €"
    tdd.innerText = productTable.quantity
    tdf.innerText = subtotal + " €"

}

let total = 0
    for (let item of cart ){ // pour chaque "item" de "cart"
        console.log(item);
        buildProductTable(item,container); // On execute buildProducTable
        total+=item.price*item.quantity;
        sessionStorage.setItem("total", total) // On stocke le total sur le sessionstorage
}

carttotal.innerHTML = total + " €"

emptyButton.addEventListener("click", function () { // Sur un click de "emptyButton"
    localStorage.setItem("cart","[]"); // On vide le localstorage en remplacant "cart" par un array vide
    window.location.reload() // On rafraîchit la page
})

// Fonction de récupération et de soumission du formulaire

submit.addEventListener("click", function(event){ // On rajoute un eventlistener sur le click de submit
    event.preventDefault() // Il est de base inactif
    if (validateForm() === true) { // Si le formulaire est valide et le panier n'est pas vide
        var contact = {    // Creation d'une variable contact contenant les informations de contact du client
            firstName: firstName.value, 
            lastName: lastName.value,
            address: address.value,
            city: city.value,
            email: email.value
        }

        var cartstring = [] // Création d'une variable "cartstring" qui est un array 
        for (line of cart){ // Pour la "line" de "cart"
            cartstring.push(line.id) // On rajoute une entrée d'id dans l'array "cartstring"
        }

        const orderdata = {"contact":contact,"products":cartstring} // La constante order data est égale à "contact" et "products" ( products= carstring )
        ajaxpost("http://localhost:3000/api/teddies/order",orderdata) // On appelle la fonction POST ajax, et on push orderdata
            .then(function(postForm){ // On met ensuite en place une fonction "postform"
            window.location.href = "confirmation.html" // Qui nous ramène à la page de confirmation
            const myOrder = JSON.stringify(postForm) // On crée une constante "myOrder" qui stringify "postForm"
            sessionStorage.setItem("myOrder", myOrder) // On stocke ensuite "myOrder" dans le sessionstorage
            localStorage.clear() // On vide le local storage
        })
        .catch(error =>{
            console.error("Erreur lors de la requête: ", error);
            errorMsg.classList.add("carterrorDiv")
            errorMsg.innerText = "Nous n'avons pas réussi à contacter le serveur, veuillez essayer ultérieurement. Si le problème persiste vous pouvez contacter Orinoco directement."
    })
}
})