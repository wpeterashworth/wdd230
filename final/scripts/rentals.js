const url = "https://wpeterashworth.github.io/wdd230/final/data/scooter.json"

let firstTable = document.querySelector("#tableRow1")
let secondTable = document.querySelector("#tableRow2")
let thirdTable = document.querySelector("#tableRow3")
let fourthTable = document.querySelector("#tableRow4")
let fifthTable = document.querySelector("#tableRow5")
let sixthTable = document.querySelector("#tableRow6")

async function apiFetch() {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
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

apiFetch()