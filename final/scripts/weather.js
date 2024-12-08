const url = "https://api.openweathermap.org/data/2.5/forecast?lat=20.42&lon=-86.92&units=imperial&appid=40ab55ee19ebd6f2e875c4b6dd07e931"

let weatherTemp = document.querySelector("#weatherTemp")
let weatherIcon = document.querySelector("#weatherIcon")
let weatherDesc = document.querySelector("#weatherDesc")
let humidity = document.querySelector("#humidity")
let forecast = document.querySelector("#forecast")
let highTemp = document.querySelector("#highTemp")

async function apiFetch() {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            displayResults(data)
            console.log(data)
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
    weatherTemp.innerHTML = `${parseInt(data.list[0].main.temp.toFixed(0))}&deg;F`
    const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`
    let desc = data.list[0].weather[0].description
    humidity.innerHTML = `${data.list[0].main.humidity}% Humidity`
    weatherIcon.setAttribute("src", iconsrc)
    weatherIcon.setAttribute("alt", "Weather Icon")
    weatherDesc.textContent = `${desc}`
    forecast.innerHTML = `Tomorrow's Forecast: ${parseInt(data.list[1].main.temp.toFixed(0))}&deg;F`
    highTemp.innerHTML = `Today's High Temperature: ${parseInt(data.list[0].main.temp_max.toFixed(0))}&deg;F`
}

apiFetch()