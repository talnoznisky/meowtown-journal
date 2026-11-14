// Add all your volumes here in order. 
// Just add new ones to the bottom when you release them!
const editions = [
    { title: "Volume 1: Quilty", url: "./vol-1.html" },
    { title: "Volume 2: Taco Chrash", url: "./vol-2.html" },
];

function buildMenu() {
    const menu = document.getElementById("dropdown-menu");
    if (!menu) return;

    // Get current filename (e.g., "index.html" or "vol-3.html")
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    // Is the current page index.html?
    const isIndex = currentPath === "index.html" || currentPath === "";

    let html = '';
    
    // 1. Current Edition link (points to index.html)
    html += `<a href="./index.html"${isIndex ? ' style="font-weight:bold;"' : ''}>Current edition</a>`;
    html += `<hr><p>Previous editions:</p>`;

    // 2. Archive editions list
    editions.forEach(arch => {
        // Check if this archive page matches the page we are currently viewing
        const isCurrentArchive = arch.url.endsWith(currentPath);
        html += `<a href="${arch.url}"${isCurrentArchive ? ' style="font-weight:bold;"' : ''}>${arch.title}</a>`;
    });

    // 3. GitHub repo link    
    menu.innerHTML = html;

    // 4. Email me
    menu.innerHTML += `<hr><p>Contact the journal:</p><a href="mailto:tal.noznisky@gmail.com">tal.noznisky@gmail.com</a>`;
}   


document.addEventListener("DOMContentLoaded", buildMenu);

// Dropdown toggle & outside click handler
function dd() {
    document.getElementsByClassName("dropdown-content")[0].classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}