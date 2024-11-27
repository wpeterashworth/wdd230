const charactersURL = "https://wpeterashworth.github.io/wdd230/final/data/characters.JSON"
const moviesURL = "https://wpeterashworth.github.io/wdd230/final/data/movies.JSON"
const quotesURL = "https://wpeterashworth.github.io/wdd230/final/data/quotes.JSON"

const characters = document.querySelector("#characters")
const quotes = document.querySelector("#movie-quotes")

async function apiFetchCharacters() {
    try {
        const response = await fetch(charactersURL)
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            displayResults(data)
        }
        else {
            throw Error(await response.text())
        }
    }
    catch (error) {
        console.log(error)
    }
}

async function apiFetchMovies() {
    try {
        const response = await fetch(moviesURL)
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            displayResults(data)
        }
        else {
            throw Error(await response.text())
        }
    }
    catch (error) {
        console.log(error)
    }
}

async function apiFetchQuotes() {
    try {
        const response = await fetch(quotesURL)
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            displayResults(data)
        }
        else {
            throw Error(await response.text())
        }
    }
    catch (error) {
        console.log(error)
    }
}

apiFetchCharacters()
apiFetchMovies()
apiFetchQuotes()