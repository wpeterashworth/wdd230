const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayProphets(data.prophets);
    }
}

getProphetData();
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section')
        let fullName = document.createElement('h2')
        let portrait = document.createElement('img')
        let dateOfBirth = document.createElement('p')
        let birthPlace = document.createElement('p')
        fullName.textContent = `${prophet.name} ${prophet.lastname}`
        portrait.setAttribute('src', prophet.imageurl)
        portrait.setAttribute('alt', `Portrait of ${prophet.data} portrait`)
        portrait.setAttribute('loading', 'lazy')
        portrait.setAttribute('width', '340')
        portrait.setAttribute('height', '440')
        dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`
        birthPlace.textContent = `Birth Place: ${prophet.birthplace}`
        card.appendChild(fullName)
        card.appendChild(dateOfBirth)
        card.appendChild(birthPlace)
        card.appendChild(portrait)

        cards.appendChild(card)
    })
}
displayProphets()