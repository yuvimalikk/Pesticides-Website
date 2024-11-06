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