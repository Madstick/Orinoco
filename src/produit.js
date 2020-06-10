const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id);

ajax('http://localhost:3000/api/teddies/' + id ).then(function(data){
console.log(data) 
}).catch(error =>{console.log(error)});


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id);

ajax('http://localhost:3000/api/teddies/' + id ).then(function(data){
console.log(data) 
}).catch(error =>{console.log(error)});


