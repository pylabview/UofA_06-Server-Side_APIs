var repoList = document.getElementById('repo-list');
var fetchButton = document.getElementById('fetch-button');


function getAPI(){
    var requestUrl = 'https://api.github.com/users/pylabview/repos';
    fetch(requestUrl)
    .then(response => response.json())
    .then(function (data){
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            var listItem = document.createElement('li');
            // var repoLink = document.createElement('a');
            // repoLink.textContent = data[i].html_url;
            // repoLink.href = data[i].html_url;
            // listItem.href = repoLink.href;
            // listItem.textContent = repoLink;
            // repoList.appendChild(listItem);
            listItem.textContent = data[i].html_url;
            repoList.appendChild(listItem);
        }

    })
    //.then(data => console.log(data))


}

fetchButton.addEventListener('click', getAPI);