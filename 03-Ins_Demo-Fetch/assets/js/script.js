var tableBody = document.getElementById('repo-table');
var fetchButton = document.getElementById('fetch-button');

function getApi(){
    console.log('Button clicked');
    // fetch all repos for noje.js organization
    var requestUrl = 'https://api.github.com/orgs/nodejs/repos';
    fetch(requestUrl)
    .then(response => response.json())
    .then(function (data) {
        console.log(data);
        for (let index = 0; index < data.length; index++) {
            // Creating element: tablerow, tabledata and anchor
            var tableRow = document.createElement('tr');
            var tableData = document.createElement('td');
            var link = document.createElement('a');

            // Setting text  and ref to the link
            link.textContent = data[index].html_url;
            link.href = data[index].html_url;

            // Appending the link to the tableData, then to the tableRow
            tableData.appendChild(link);
            tableRow.appendChild(tableData);
            // then the tableRow to the tableBody
            tableBody.appendChild(tableRow);
            
            
        } 
     } );
}

fetchButton.addEventListener('click',getApi);