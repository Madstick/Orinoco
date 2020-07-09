const myOrder = JSON.parse(sessionStorage.getItem("myOrder")) // On récupère "myOrder" avec le sessionstorage et on le parse
console.log(myOrder)

const total = document.getElementById("totalcmd") // On crée une constante total qui se réfère à l'élément "totalcmd" dans le html 
const id = document.getElementById("idcmd") // On fait la même chose pour "idcmd"

id.innerText = myOrder.orderId // Id est égale à l'orderId de "myOrder" fourni par le serveur
total.innerText = sessionStorage.getItem("total") + ' €' // Le total est égale au total conservé dans le sessionstorage