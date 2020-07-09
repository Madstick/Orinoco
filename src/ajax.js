function ajax (url) { // On crée une fonction nommée ajax sur une url donnée
    return new Promise(function (resolve, reject) { // Qui retournera une promesse
      const httpRequest = new XMLHttpRequest() // On crée la requête ajax
      httpRequest.onreadystatechange = function () { // On suit l'évolution de la requête
        if (httpRequest.readyState === 4) {
          if (httpRequest.status >= 200 && httpRequest.status < 300) { // Si elle à correctement abouti
            resolve(JSON.parse(httpRequest.responseText)) // On résout la promesse et on renvoie un JSON parsé
          } else {
            reject(httpRequest.status + " " + httpRequest.statusText) // En cas d'erreur on aura accès à l'erreur en question dans la console
          }
        }
      }
      httpRequest.onerror = function(error){
        reject(error)
      }
      httpRequest.open('GET', url, true) // Cette requête utilise la méthode GET sur l'URL donné, et de manière asynchrone
      httpRequest.send() // On envoie la requête au serveur
    })
  }
  