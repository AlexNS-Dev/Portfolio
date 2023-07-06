// Loads a file into an HTML element with a specific ID
function loadHtml(id, url) {
    $.ajax({
        url: url,
        method: "GET",
        success: function(response) {
            $("#" + id).html(response);
        },
        error: function() {
            console.log("Error loading the following file: " + url)
        }
    });
}

// Executes when page loads
function onLoadPage() {
    loadHtml('customNavbar', 'assets/navbar.html');
}