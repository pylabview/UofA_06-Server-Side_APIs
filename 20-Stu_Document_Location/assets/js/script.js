var badRequestUrl = 'https://api.github.com/unicorns';
var goodRequestUrl = 'https://api.github.com/repos/nodejs/node/issues?per_page=5'
var redirectUrl = './404.html';

fetch(badRequestUrl)
 .then(function(response){
    if (response.status=== 404){
        document.location.assign(redirectUrl);
    } else {
        return response.json();
    }

 });