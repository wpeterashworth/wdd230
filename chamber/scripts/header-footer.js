
// ham menu stuff
let menuButton = document.querySelector("#menu-button");
let navList = document.querySelector("nav ul")
menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open")
    navList.classList.toggle("open")
})

// date stuff
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

let year = document.querySelector("#date");
year.innerHTML = `&copy${currentYear}`;

let lastModifiedDate = document.querySelector("#lastModified");
lastModifiedDate.textContent = new Date(document.lastModified);

//dark mode

//dark mode
let darkButton = document.querySelector("#darkMode");
darkButton.addEventListener('click', () => {
    darkButton.classList.toggle("dark")
    if (darkButton.classList.contains("dark")) {
        document.documentElement.style.setProperty('--text-color1', 'white');
        document.documentElement.style.setProperty('--text-color2', 'black')
        document.documentElement.style.setProperty('--background-color', '#315659');
        document.documentElement.style.setProperty('--accent-color', '#7EA8BE');
        document.documentElement.style.setProperty('--header-color', '#28536B');
    }
    else {
        document.documentElement.style.setProperty('--text-color1', 'black');
        document.documentElement.style.setProperty('--text-color2', 'white');
        document.documentElement.style.setProperty('--background-color', '#A3C4BC');
        document.documentElement.style.setProperty('--accent-color', '#28536B');
        document.documentElement.style.setProperty('--header-color', '#7EA8BE');
    }
})