const baseURL = "https://wpeterashworth.github.io/wdd230/chamber/"
const membersURL = "https://wpeterashworth.github.io/wdd230/chamber/data/members.json"

const gridContainer = document.querySelector('#gridView')
const listContainer = document.querySelector('#listView')
const toggleButton = document.querySelector('#toggleButton')

async function getMembers() {
    const response = await fetch(membersURL)
    if (response.ok) {
        const data = await response.json()
        displayMembers(data.directory)
    }
}

getMembers()

const displayMembers = (members) => {

    members.forEach(member => {
        let listCard = document.createElement("section")
        let gridCard = document.createElement("section")
        let companyName = document.createElement("h3")
        let membershipLevel = document.createElement("p")
        let address = document.createElement("p")
        let phone = document.createElement("p")
        let website = document.createElement("a")

        companyName.textContent = member.company
        membershipLevel.textContent = member.membershipLevel
        address.textContent = member.address
        phone.textContent = member.phone
        website.setAttribute("href", `https://${member.website}`)
        website.textContent = member.website

        let logo = document.createElement("img")
        logo.setAttribute("src", member.logo)

        listCard.appendChild(logo)
        listCard.appendChild(companyName)
        listCard.appendChild(address)
        listCard.appendChild(phone)
        listCard.appendChild(website)
        gridCard.appendChild(logo)
        gridCard.appendChild(companyName)
        gridCard.appendChild(address)
        gridCard.appendChild(phone)
        gridCard.appendChild(website)
        gridContainer.appendChild(gridCard)
        listContainer.appendChild(listCard)
    })
}

toggleButton.addEventListener('click', () => {
    gridContainer.classList.toggle('hidden');
    listContainer.classList.toggle('hidden');
});
