// Personal information
document.addEventListener('DOMContentLoaded', function() {
    const birth = new Date(1995, 6, 5);
    const thisYearsBirthday = new Date(new Date().getFullYear(), 6, 5);
    const myAgeInMillis = thisYearsBirthday - birth;

    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
    const myAgeInYears = myAgeInMillis / millisecondsPerYear;
  
    if (window.location.href.endsWith('about.html')) {
      let ageElement = document.getElementsByClassName('age')[0];
      if (ageElement !== undefined) {
        ageElement.append(myAgeInYears);
      }
    }
  });
  
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