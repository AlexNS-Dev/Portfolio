// Loads a file into an HTML element with a specific ID
function loadHtml(id, url) {
    fetch(url)
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            return response.text();
        })
        .then(function (html) {
            document.getElementById(id).innerHTML = html;
        })
        .catch(function (error) {
            console.error("Error loading the following file: " + url);
        });
}

// Executes when page loads
function onLoadPage() {
    loadHtml('customNavbar', 'assets/navbar.html');
}