// Once page is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Personal info
    const birth = new Date(1995, 6, 5);
    const thisYearsBirthday = new Date(new Date().getFullYear(), 6, 5);
    const myAgeInMillis = thisYearsBirthday - birth;
    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
    const myAgeInYears = myAgeInMillis / millisecondsPerYear;

    // Adds current age dynamically
    if (window.location.href.endsWith('about.html')) {
        let ageElement = document.getElementsByClassName('age')[0];
        if (ageElement !== undefined) {
            ageElement.append(myAgeInYears);
        }
    }
});

// Traducciones
// Cargar los mensajes del archivo JSON
fetch('translates.json')
    .then(response => response.json())
    .then(data => {
        // Function to change specific text language on the page through buttons
        function changeLanguage(language) {
            // Retrieve correct document depending on laguage selected
            var translates = data[language];

            // Navbar
            document.querySelector('.navbar .navHome').childNodes[1].textContent = translates.navbar.home;
            document.querySelector('.navbar .navAbout').childNodes[1].textContent = translates.navbar.about;
            document.querySelector('.navbar .navPortfolio').childNodes[1].textContent = translates.navbar.portfolio;
            document.querySelector('.navbar .navContact').childNodes[1].textContent = translates.navbar.contact;

            // Heading
            document.querySelector('.heading').childNodes[0].textContent = translates.heading.leftSide;
            document.querySelector('.heading').childNodes[1].textContent = translates.heading.rightSide;

            // Personal info
                // Box 1
            document.querySelector('.info-container h1').textContent = translates.personalInfo.title;
            document.querySelector('.info-container .box-container .box:nth-child(1) h3').childNodes[1].textContent = translates.personalInfo.nameTag;
            document.querySelector('.info-container .box-container .box:nth-child(1) h3:nth-child(2)').childNodes[0].textContent = translates.personalInfo.ageTag;
            document.querySelector('.info-container .box-container .box:nth-child(1) h3:nth-child(3)').childNodes[1].textContent = translates.personalInfo.emailTag;
            document.querySelector('.info-container .box-container .box:nth-child(1) h3:nth-child(4)').childNodes[1].textContent = translates.personalInfo.fromTag;
            document.querySelector('.info-container .box-container .box:nth-child(1) h3:nth-child(4)').childNodes[2].textContent = translates.personalInfo.fromValue;
                // Box 2
            document.querySelector('.info-container .box-container .box:nth-child(2) h3:nth-child(1)').childNodes[1].textContent = translates.personalInfo.availabilityTag;
            document.querySelector('.info-container .box-container .box:nth-child(2) h3:nth-child(1)').childNodes[2].textContent = translates.personalInfo.availabilityValue;
            document.querySelector('.info-container .box-container .box:nth-child(2) h3:nth-child(2)').childNodes[1].textContent = translates.personalInfo.skillsTag;
            document.querySelector('.info-container .box-container .box:nth-child(2) h3:nth-child(2)').childNodes[2].textContent = translates.personalInfo.skillsValue;
            document.querySelector('.info-container .box-container .box:nth-child(2) h3:nth-child(3)').childNodes[1].textContent = translates.personalInfo.experienceTag;
            document.querySelector('.info-container .box-container .box:nth-child(2) h3:nth-child(3)').childNodes[2].textContent = translates.personalInfo.experienceValue;
            document.querySelector('.info-container .box-container .box:nth-child(2) h3:nth-child(4)').childNodes[1].textContent = translates.personalInfo.languagesTag;
            document.querySelector('.info-container .box-container .box:nth-child(2) h3:nth-child(4)').childNodes[2].textContent = translates.personalInfo.languagesValue;
            // Count container
            document.querySelector('.count-container .box:nth-child(1) p').textContent = translates.countContainer.box1;
            document.querySelector('.count-container .box:nth-child(2) p').textContent = translates.countContainer.box2;
            document.querySelector('.count-container .box:nth-child(3) p').textContent = translates.countContainer.box3;
            document.querySelector('.count-container .box:nth-child(4) h3').textContent = translates.countContainer.box4Title;
            document.querySelector('.count-container .box:nth-child(4) p').textContent = translates.countContainer.box4;
        }

        // Changes languages depending on the button clicked
        document.getElementById('englishBtn').addEventListener('click', function () {
            changeLanguage('en');
        });

        document.getElementById('spanishBtn').addEventListener('click', function () {
            changeLanguage('es');
        });

        // Load initial translates
        changeLanguage('en');
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