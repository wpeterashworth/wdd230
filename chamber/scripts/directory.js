const baseURL = "https://wpeterashworth.github.io/wdd230/chamber/"
const membersURL = "https://wpeterashworth.github.io/wdd230/chamber/data/members.json"
const cards = document.querySelector("#members")

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
        let card = document.createElement("section")
        let companyName = document.createElement("h3")
        let membershipLevel = document.createElement("p")
        let address = document.createElement("p")
        let phone = document.createElement("p")
        let website = document.createElement("a")

        card.setAttribute("class", "member")
        companyName.textContent = member.company
        membershipLevel.textContent = member.membershipLevel
        address.textContent = member.address
        phone.textContent = member.phone
        website.setAttribute("href", `https://${member.website}`)
        website.textContent = member.website

        let logo = document.createElement("img")
        logo.setAttribute("src", member.logo)

        card.appendChild(logo)
        card.appendChild(companyName)
        card.appendChild(address)
        card.appendChild(phone)
        card.appendChild(website)
        cards.appendChild(card)
    })
}

const gridBtn = document.querySelector("#gridBtn")
const listBtn = document.querySelector("#listBtn")
const display = document.querySelector("article")

gridBtn.addEventListener("click", () => {
    display.classList.add("grid")
    display.classList.remove("list")
})

listBtn.addEventListener("click", showList)

function showList() {
    display.classList.add("list")
    display.classList.remove("grid")
}