const baseURL = "https://wpeterashworth.github.io/wdd230/"
const linksURL = "https://wpeterashworth.github.io/wdd230/data/links.json"
let activitiesSection = document.querySelector('.activities')

async function getLinks() {
    const response = await fetch(linksURL)
    if (response.ok) {
        const data = await response.json()
        displayLinks(data.weeks)
    }
}

const displayLinks = (weeks) => {
    weeks.forEach(week => {
        let weekNumber = document.createElement('p')
        let link = document.createElement('a')
        weekNumber.textContent = `Week ${week.lesson}:`
        link.textContent = `${week.links.title}|`
        link.setAttribute('src', week.links.url)
        activitiesSection.appendChild(weekNumber)
        activitiesSection.appendChild(link)
    });

}

getLinks();