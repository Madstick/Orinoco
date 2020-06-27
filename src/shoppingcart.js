
(function(){
    if(sessionStorage.getItem("newOrder") === null){
        console.log("Pas de commande");        
    } 
    else {

    }
    const getStorage = sessionStorage.getItem("newOrder");
console.log(newOrder);
})


// ajax('http://localhost:3000/api/teddies/').then(function(data){
// console.log(data)
// const container = document.getElementById('carttable')
// buildProductTable(data,container);
// }).catch(error =>{console.log(error)});




const buildProductTable = (productTable,container) => {

const tr = document.createElement('tr')
const tda = document.createElement('td')
const tdb = document.createElement('td')
const tdc = document.createElement('td')
const tdd = document.createElement('td')
const tdf = document.createElement('td')
var subtotal = price*quantity

container.appendChild(tr)
tr.appendChild(tda)
tr.appendChild(tdb)
tr.appendChild(tdc)
tr.appendChild(tdd)
tr.appendChild(tdf)

tda.innerText = productTable.name
tdb.innerText = productTable.color
tdc.innerText = productTable.price + ' €'
tdd.innerText = productTable.quantity
tdf.innerText = productTable.subtotal + ' €'

}


// const container = document.getElementById('carttable')
// buildProductTable(data,container);

