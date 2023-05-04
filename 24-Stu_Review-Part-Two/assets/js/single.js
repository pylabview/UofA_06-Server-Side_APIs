var repoNameEl = document.getElementById('repo-name');
var issueContainerEl = document.getElementById('issues-container');
var limitWarningEl = document.getElementById('limit-warning');

function getRepoName() {
    var queryString = document.location.search;
    var repoName = queryString.split('=')[1];

    if (repoName) {
        repoNameEl.textContent = repoName;

        getRepoIssues(repoName);
        
    }else{
        document.location.replace('./index.html');
    }
};

function getRepoIssues(repoName) {
    var apiUrl = 'https://api.github.com/repos/' + repoName + '/issues?direction=asc';

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function (data) {
                displayIssues(data);
                if (response.headers.get('Link')) {
                    displayWarning(repoName);
                    
                }
            });
            
        }else {

                document.location.replace('./index.html');
        }
    });
};

function displayIssues(issues) {

    if (issues.length === 0) {
        issueContainerEl.textContent = 'No issues found';
        return;
    }

    for (let i = 0; i < issues.length; i++) {
        var issueEl = document.createElement('a')
        issueEl.classList = 'list-item flex-row justify-content-between align-items-center';
        issueEl.setAttribute('href', issues[i].html_url);
        issueEl.setAttribute('target','_blank')

        var titleEl = document.createElement('span');
        titleEl.textContent = issues[i].title;
        issueEl.appendChild(titleEl);

        var typeEl = document.createElement('span');

        if (issues[i].pull_request) {
            typeEl.textContent = 'Pull Request';

            }else{
            typeEl.textContent = 'Issue';
        }
        issueEl.appendChild(typeEl);
        issueContainerEl.appendChild(issueEl);
        }
    };

function displayWarning(repoName) {
    limitWarningEl.textContent = 'To see more than 30 issues, visit';

    var linkEl = document.createElement('a');
    linkEl.textContent = 'GitHub.com';
    linkEl.setAttribute('href', 'https://github.com/' + repoName + '/issues');
    linkEl.setAttribute('target','_blank');
    limitWarningEl.appendChild(linkEl);
    
};
    



getRepoName();