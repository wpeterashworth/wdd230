let visits = getNumberOfVisits()
let visitsSpan = document.querySelector("#visits")
visitsSpan.innerText = visits

function getNumberOfVisits() {
    let visitCount = localStorage.getItem("site-visits")
    if (visitCount == null) {
        visitCount = 0
    }
    else {
        visitCount = parseInt(visitCount)
    }
    visitCount = visitCount + 1
    localStorage.setItem("site-visits", `${visitCount}`)
    return visitCount
}