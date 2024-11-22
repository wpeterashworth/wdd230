const url = "https://api.openweathermap.org/data/2.5/forecast?lat=37.94&lon=-121.94&units=imperial&appid=40ab55ee19ebd6f2e875c4b6dd07e931"

let currentTemp = document.querySelector("#temperature")
let weatherIcon = document.querySelector("#weatherIcon")
let currentConditions = document.querySelector("#currentConditions")
let weatherForecast = document.querySelector("#forecast")
let windSpeed = document.querySelector("#windspeed")
let windChill = document.querySelector("#windchill");

async function apiFetch() {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
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

function displayResults(data) {
    currentTemp.innerHTML = `${parseInt(data.list[0].main.temp.toFixed(0))}`
    const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`
    let desc = data.list[0].weather[0].description
    weatherForecast.innerHTML = `${parseInt(data.list[1].main.temp.toFixed(0))}&deg;F | ${parseInt(data.list[2].main.temp.toFixed(0))}&deg;F | ${parseInt(data.list[3].main.temp.toFixed(0))}&deg;F`
    weatherIcon.setAttribute("src", iconsrc)
    weatherIcon.setAttribute("alt", "Weather Icon")
    currentConditions.textContent = `${desc}`
}

apiFetch()