const baseURL = "https://wpeterashworth.github.io/wdd230/chamber/"
const membersURL = "https://wpeterashworth.github.io/wdd230/chamber/data/members.json"

async function getMembers() {
    const response = await fetch(membersURL)
    if (response.ok) {
        const data = await response.json()
        console.log(data)
    }
}

getMembers()