let tempSpan = document.querySelector("#temperature");
let windSpeedSpan = document.querySelector("#windspeed");
let windChillSpan = document.querySelector("#windchill");

function showWindChill(temp, wind) {
    if (temp > 50 || wind <= 3) {
        windChillSpan.innerText = "N/A"
        return
    }

    chillfactor = wind ** 0.16
    chill = 35.74 + (0.6215 * temp) - (35.75 * chillfactor) + (0.4275 * temp * chillfactor)
    windChillSpan.innerHTML = `${chill.toFixed(0)}&deg;F`
}

showWindChill(parseInt(tempSpan.innerText), parseInt(windSpeedSpan.innerText));