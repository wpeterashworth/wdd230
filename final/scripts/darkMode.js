//dark mode
let darkButton = document.querySelector("#darkMode");
darkButton.addEventListener('click', () => {
    darkButton.classList.toggle("dark")
    if (darkButton.classList.contains("dark")) {
        document.documentElement.style.setProperty('--text-color1', 'white');
        document.documentElement.style.setProperty('--text-color2', 'black')
        document.documentElement.style.setProperty('--background-color', '#003804');
        document.documentElement.style.setProperty('--accent-color', '#98D2EB');
        document.documentElement.style.setProperty('--accent-color2', '#E1F2FE');
        document.documentElement.style.setProperty('--header-color', '#C9E4CA');
    }
    else {
        document.documentElement.style.setProperty('--text-color1', 'black');
        document.documentElement.style.setProperty('--text-color2', 'white');
        document.documentElement.style.setProperty('--background-color', '#E1F2FE');
        document.documentElement.style.setProperty('--accent-color', '#C9E4CA');
        document.documentElement.style.setProperty('--accent-color2', '#55828B');
        document.documentElement.style.setProperty('--header-color', '#98D2EB');
    }
})