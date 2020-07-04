function ajaxpost (url, send) {
    return new Promise(function (resolve, reject) { 
      const httpRequest = new XMLHttpRequest() 
      httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) {
          if (httpRequest.status >= 200 && httpRequest.status < 300) { 
            resolve(JSON.parse(httpRequest.responseText)) 
          } else {
            reject(httpRequest.status + " " + httpRequest.statusText) 
          }
        }
      }
      httpRequest.onerror = function(error){
        reject(error)
      }
      httpRequest.open('POST', url, true) 
      httpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      httpRequest.send(JSON.stringify(send)) 
    })
  }
  