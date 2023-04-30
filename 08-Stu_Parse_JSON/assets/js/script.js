var urlRequest = 'https://api.github.com/repos/twitter/chill/issues?per_page=5';

fetch(urlRequest)
 .then(response => response.json())
 .then(function(data){
    console.log(data);
    console.log('Git Repo issues \n-------------');
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        console.log(element.url);
        console.log(element.user.login);        
        
    }
 });

