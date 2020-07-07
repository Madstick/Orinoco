const errorMsg = document.getElementById("errorMsg")
const container = document.getElementById("carttable")
const carttotal = document.getElementById("carttotal")
const emptyButton = document.getElementById("empty")


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
    for (let item of cart ){
        console.log(item);
        buildProductTable(item,container);
        total+=item.price*item.quantity;
        sessionStorage.setItem("total", total)
}

carttotal.innerHTML = total + " €"


    emptyButton.addEventListener("click", function () {
        localStorage.setItem("cart","[]");
        window.location.reload()
})

// Fonction de récupération et de soumission du formulaire

const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const address = document.getElementById('address')
const city = document.getElementById('city')
const date = document.getElementById('date')
const email = document.getElementById('email')

const submit = document.getElementById("submit")
submit.addEventListener("click", function(event){
    event.preventDefault()
    if (validateForm() === true) { // Si le formulaire est valide et le panier n'est pas vide
        var contact = {    // Creation d'une variable contact contenant les informations de contact du client
            firstName: firstName.value,
            lastName: lastName.value,
            address: address.value,
            city: city.value,
            email: email.value
        }

        var cartstring = [] // Création d'une variable cartstring qui est un array
        for (line of cart){
            cartstring.push(line.id)
        }

        const orderdata = {"contact":contact,"products":cartstring}
        ajaxpost("http://localhost:3000/api/teddies/order",orderdata)
            .then(function(postForm){
            window.location.href = "confirmation.html"
            const myOrder = JSON.stringify(postForm) 
            sessionStorage.setItem("myOrder", myOrder)
            localStorage.clear()
        })
        .catch(error =>{
            console.error("Erreur lors de la requête: ", error);
            errorMsg.classList.add("carterrorDiv")
            errorMsg.innerText = "Nous n'avons pas réussi à contacter le serveur, veuillez essayer ultérieurement. Si le problème persiste vous pouvez contacter Orinoco directement."
    })
}
})