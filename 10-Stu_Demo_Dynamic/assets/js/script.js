var usersContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getAPI(){
    console.log('Testing getAPI function')
    var requestUrl = 'https://api.github.com/users?per_page=5'

    fetch(requestUrl)
    .then(response => response.json())
    .then(function(data){
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            //Creating elements for user login and url
            var userLogin = document.createElement('h3');
            var userUrl = document.createElement('p');

            //Setting the values to each element
            userLogin.textContent = data[i].login;
            userUrl.textContent = data[i].url;

            //Appending the elements to the container
            usersContainer.append(userLogin);
            usersContainer.append(userUrl)
            
        }

    })


}

fetchButton.addEventListener('click', getAPI)

