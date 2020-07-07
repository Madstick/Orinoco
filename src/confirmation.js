const myOrder = JSON.parse(sessionStorage.getItem("myOrder"))
console.log(myOrder)

const Total = document.getElementById("totalcmd")
const Id = document.getElementById("idcmd")

Id.innerText = myOrder.orderId
Total.innerText = sessionStorage.getItem("total") + ' €'