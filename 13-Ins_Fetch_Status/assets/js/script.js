var requestUrl = 'https://api.github.com/orgs/nodejs/repos?per_page=5';

var responseText = document.getElementById('response-text');

function getApi(requestUrl){
    fetch(requestUrl)
    .then(function(response){
        console.log(response);
        if (response.status === 200){
            console.log('status: ',response.status)
            responseText.textContent=response.status;
        }  
        return response.json();
      });
}

getApi(requestUrl);