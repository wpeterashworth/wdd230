const baseURL = "https://wpeterashworth.github.io/wdd230/"
const linksURL = "https://wpeterashworth.github.io/wdd230/data/links.json"
const linksContainer = document.getElementById('links');

async function getLinks() {
    const response = await fetch(linksURL)
    if (response.ok) {
        const data = await response.json()
        displayLinks(data.lessons)
    }
}

const displayLinks = (weeks) => {
    weeks.forEach(week => {
        let weekLi = document.createElement('li')
        weekLi.textContent = `Week ${week.lesson} `
        week.links.forEach(link => {

            let aLink = document.createElement('a')


            aLink.href = link.url
            aLink.textContent = ` | ${link.title}`

            weekLi.appendChild(aLink)
            linksContainer.appendChild(weekLi)

        })


    });

}

getLinks();