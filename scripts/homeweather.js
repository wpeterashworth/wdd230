const url = "https://api.openweathermap.org/data/2.5/weather?lat=43.82&lon=-111.79&units=imperial&appid=40ab55ee19ebd6f2e875c4b6dd07e931"

let weatherTemp = document.querySelector("#weatherTemp")
let weatherIcon = document.querySelector("#weatherIcon")
let weatherDesc = document.querySelector("#weatherDesc")

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

// function changeToUpperCase(desc) {
//     desc.charAt(0).toUpperCase() + desc.slice(1)
// }

function displayResults(data) {
    weatherTemp.innerHTML = `${parseInt(data.main.temp.toFixed(0))}&deg;F`
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let desc = data.weather[0].description
    weatherIcon.setAttribute("src", iconsrc)
    weatherIcon.setAttribute("alt", "Weather Icon")
    weatherDesc.textContent = `${desc}`
}

apiFetch()