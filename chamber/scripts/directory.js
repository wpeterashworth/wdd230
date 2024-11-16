const baseURL = "https://wpeterashworth.github.io/wdd230/chamber/"
const membersURL = "https://wpeterashworth.github.io/wdd230/chamber/data/members.json"

async function getMembers() {
    const response = await fetch(membersURL)
    if (response.ok) {
        const data = await response.json()
        displayMembers(data.members)
    }
}

const displayMembers = (members) => {
    const cards = document.querySelector("#members")

    members.forEach((member) => {
        const card = document.createElement("section")
        card.setAttribute("class", "member")
        const companyName = document.createElement("h3")
        companyName.textContent = member.company
        const membershipLevel = document.createElement("p")
        membershipLevel.textContent = member.membershipLevel
        const address = document.createElement("p")
        address.textContent = member.address
        const phone = document.createElement("p")
        phone.textContent = member.phone
        const website = document.createElement("a")
        website.setAttribute("href", `https://${member.website}`)
        website.textContent = member.website

        const logo = document.createElement("img")
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

getMembers()
// This is a comment