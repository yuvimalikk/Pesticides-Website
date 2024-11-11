// Dark Mode Toggle
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('#header').classList.toggle('dark-mode');
    document.querySelector('table').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
}

// Page Load Animation
function pageLoadAnimation() {
    document.body.classList.add('fade-in');
}

// Search Filter
function filterTable() {
    const input = document.getElementById("search").value.toLowerCase();
    const table = document.getElementById("pesticideTable");
    const rows = table.getElementsByTagName("tr")
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        let match = false
        for (let j = 0; j < cells.length; j++) {
            if (cells[j].textContent.toLowerCase().includes(input)) {
                match = true;
                break;
            }
        }
        rows[i].style.display = match ? "" : "none";
    }
}

// Language Selection
function showLanguageSection(lang) {
    let sections = document.getElementsByClassName('language-section');
    for (let section of sections) {
        section.classList.remove('active');
    }
    document.getElementById(`section-${lang}`).classList.add('active');
}

function changeLanguage() {
    let lang = document.getElementById('language-select').value;
    showLanguageSection(lang);
}

// JavaScript for Language Toggle (Optional)
// This is just for demonstration, you can implement language switch functionality here

document.getElementById('toggle-lang').addEventListener('click', function() {
    // Switch between languages or trigger a language modal
    alert('Language toggle feature can be implemented here');
});

function goToIndex() {
    // Navigate to the index.html page
    window.location.href = "index.html";
}

function goToData() {
    // Navigate to the index.html page
    window.location.href = "data.html";
}

function filterTable() {
    const input = document.getElementById("search");
    const filter = input.value.toLowerCase();
    const table = document.querySelector("table tbody");
    const rows = table.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        let rowMatch = false;

        for (let j = 0; j < cells.length; j++) {
            if (cells[j].textContent.toLowerCase().includes(filter)) {
                rowMatch = true;
                break;
            }
        }

        rows[i].style.display = rowMatch ? "" : "none";
    }
}
