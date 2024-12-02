const moviesURL = "https://wpeterashworth.github.io/wdd230/final/data/movies.JSON"
const movieInfo = document.querySelector("#movie-info")

async function apiFetchMovies() {
    try {
        const response = await fetch(moviesURL)
        if (response.ok) {
            const movieData = await response.json()
            displayMovieInfo(movieData)
        }
        else {
            throw Error(await response.text())
        }
    }
    catch (error) {
        console.log(error)
    }
}


function displayMovieInfo(movieData) {
    let fellowship = movieData.docs[6]
    let towers = movieData.docs[5]
    let king = movieData.docs[7]

    let fellowshipData = document.createElement("p")
    let towersData = document.createElement("p")
    let kingData = document.createElement("p")

    fellowshipData.textContent = `${fellowship.name} is ${fellowship.runtimeInMinutes} minutes long, and recieved $${fellowship.boxOfficeRevenueInMillions} million in box office revenue. The movie has won ${fellowship.academyAwardWins} academy awards.`
    towersData.textContent = `${towers.name} is ${towers.runtimeInMinutes} minutes long, and recieved $${towers.boxOfficeRevenueInMillions} million in box office revenue. The movie has won ${towers.academyAwardWins} academy awards.`
    kingData.textContent = `${king.name} is ${king.runtimeInMinutes} minutes long, and recieved $${king.boxOfficeRevenueInMillions} million in box office revenue. The movie has won ${king.academyAwardWins} academy awards.`

    movieInfo.appendChild(fellowshipData)
    movieInfo.appendChild(towersData)
    movieInfo.appendChild(kingData)

}

apiFetchMovies()