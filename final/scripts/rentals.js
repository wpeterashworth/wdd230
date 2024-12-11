const url = "https://wpeterashworth.github.io/wdd230/final/data/scooters.json"

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
            displayInfo(data)
        }
        else {
            throw Error(await response.text())
        }
    }
    catch (error) {
        console.log(error)
    }
}

function displayInfo(data) {
    firstTable.innerHTML = `<td colspan="2">${data.scooters[0].name}</td><td>${data.scooters[0].capacity}</td><td>${data.scooters[0].reservationHalfDayPrice}</td><td>${data.scooters[0].reservationFullDayPrice}</td><td>${data.scooters[0].walkInHalfDayPrice}</td><td>${data.scooters[0].walkInFullDayPrice}`
    secondTable.innerHTML = `<td colspan="2">${data.scooters[1].name}</td><td>${data.scooters[1].capacity}</td><td>${data.scooters[1].reservationHalfDayPrice}</td><td>${data.scooters[1].reservationFullDayPrice}</td><td>${data.scooters[1].walkInHalfDayPrice}</td><td>${data.scooters[1].walkInFullDayPrice}`
    thirdTable.innerHTML = `<td colspan="2">${data.scooters[2].name}</td><td>${data.scooters[2].capacity}</td><td>${data.scooters[2].reservationHalfDayPrice}</td><td>${data.scooters[2].reservationFullDayPrice}</td><td>${data.scooters[2].walkInHalfDayPrice}</td><td>${data.scooters[2].walkInFullDayPrice}`
    fourthTable.innerHTML = `<td colspan="2">${data.scooters[3].name}</td><td>${data.scooters[3].capacity}</td><td>${data.scooters[3].reservationHalfDayPrice}</td><td>${data.scooters[3].reservationFullDayPrice}</td><td>${data.scooters[3].walkInHalfDayPrice}</td><td>${data.scooters[3].walkInFullDayPrice}`
    fifthTable.innerHTML = `<td colspan="2">${data.scooters[4].name}</td><td>${data.scooters[4].capacity}</td><td>${data.scooters[4].reservationHalfDayPrice}</td><td>${data.scooters[4].reservationFullDayPrice}</td><td>${data.scooters[4].walkInHalfDayPrice}</td><td>${data.scooters[4].walkInFullDayPrice}`
    sixthTable.innerHTML = `<td colspan="2">${data.scooters[5].name}</td><td>${data.scooters[5].capacity}</td><td>${data.scooters[5].reservationHalfDayPrice}</td><td>${data.scooters[5].reservationFullDayPrice}</td><td>${data.scooters[5].walkInHalfDayPrice}</td><td>${data.scooters[5].walkInFullDayPrice}`
}

apiFetch()