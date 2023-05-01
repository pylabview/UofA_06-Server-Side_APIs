var badUrl = 'https://api.github.com/orgs/nodejs/oreps';
var responseText = document.getElementById('response-text');

function getApi(badUrl) {
    fetch(badUrl)
    .then(function(response){
        console.log(response.status);

        if (response.status !== 200){
            responseText.textContent = response.status;
        }
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
    
}

getApi(badUrl);