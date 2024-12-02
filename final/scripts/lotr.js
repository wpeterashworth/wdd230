const charactersURL = "https://wpeterashworth.github.io/wdd230/final/data/characters.JSON"
const moviesURL = "https://wpeterashworth.github.io/wdd230/final/data/movies.JSON"
const quotesURL = "https://wpeterashworth.github.io/wdd230/final/data/quotes.JSON"

const characters = document.querySelector("#characters")
const quotes = document.querySelector("#movie-quotes")
const movieInfo = document.querySelector("#movie-info")

async function apiFetchCharacters() {
    try {
        const response = await fetch(charactersURL)
        if (response.ok) {
            const characterData = await response.json()
            displayCharacterInfo(characterData)
            console.log(characterData)
        }
        else {
            throw Error(await response.text())
        }
    }
    catch (error) {
        console.log(error)
    }
}

async function apiFetchMovies() {
    try {
        const response = await fetch(moviesURL)
        if (response.ok) {
            const movieData = await response.json()
            console.log(movieData)
            displayMovieInfo(movieData)
        }
        else {
            throw Error(await response.text())
        }
    }
    catch (error) {
        console.log(error)
    }
}

async function apiFetchQuotes() {
    try {
        const response = await fetch(quotesURL)
        if (response.ok) {
            const quoteData = await response.json()
            console.log(quoteData)
            displayQuotes(quoteData)
        }
        else {
            throw Error(await response.text())
        }
    }
    catch (error) {
        console.log(error)
    }
}

function displayQuotes(quoteData) {
    let quote1 = document.createElement("p")
    let quote2 = document.createElement("p")
    let quote3 = document.createElement("p")
    let quote4 = document.createElement("p")
    let quote5 = document.createElement("p")
    let quote6 = document.createElement("p")
    let quote7 = document.createElement("p")
    let quote8 = document.createElement("p")
    let quote9 = document.createElement("p")
    let quote10 = document.createElement("p")
    let quote11 = document.createElement("p")
    let quote12 = document.createElement("p")


    quote1.textContent = `"${quoteData.docs[19].dialog}" - Gollum`
    quote2.textContent = `"${quoteData.docs[86].dialog}" - Bilbo`
    quote3.textContent = `"Even the smallest person can change the course of the future." - Galadriel`
    quote4.textContent = `"${quoteData.docs[97].dialog}" - Frodo`
    quote5.textContent = `"${quoteData.docs[601].dialog}" - Gandalf`
    quote6.textContent = `"${quoteData.docs[410].dialog}" - Faramir`
    quote7.textContent = `"${quoteData.docs[863].dialog}" - Arwen`
    quote8.textContent = `"${quoteData.docs[135].dialog}" - Éowyn`
    quote9.textContent = `"${quoteData.docs[256].dialog}" - Legolas`
    quote10.textContent = `"${quoteData.docs[296].dialog}" - Aragorn`
    quote11.textContent = `"${quoteData.docs[650].dialog}" "${quoteData.docs[651].dialog}" - Frodo and Sam`
    quote12.textContent = `"I never thought I'd die fighting side by side with an elf." "How about side by side with a friend?" "Aye. I could do that." - Gimli and Legolas`

    quotes.appendChild(quote1)
    // quotes.appendChild(gollum)
    quotes.appendChild(quote2)
    // quotes.appendChild(bilbo)
    quotes.appendChild(quote3)
    // quotes.appendChild(galadriel)
    quotes.appendChild(quote4)
    // quotes.appendChild(frodo)
    quotes.appendChild(quote5)
    // quotes.appendChild(gandalf)
    quotes.appendChild(quote6)
    // quotes.appendChild(faramir)
    quotes.appendChild(quote7)
    // quotes.appendChild(arwen)
    quotes.appendChild(quote8)
    // quotes.appendChild(eowyn)
    quotes.appendChild(quote9)
    // quotes.appendChild(legolas)
    quotes.appendChild(quote10)
    // quotes.appendChild(aragorn)
    quotes.appendChild(quote11)
    // quotes.appendChild(samFrodo)
    quotes.appendChild(quote12)
    // quotes.appendChild(legolasGimli)
}

function displayMovieInfo(movieData) {
    let fellowship = movieData.docs[6]
    let towers = movieData.docs[5]
    let king = movieData.docs[7]

    let fellowshipData = document.createElement("p")
    let towersData = document.createElement("p")
    let kingData = document.createElement("p")

    fellowshipData.textContent = `${fellowship.name} is ${fellowship.runtimeInMinutes} minutes long, and recieved $${fellowship.boxOfficeRevenueInMillions} million in box office revenue. The movie has won ${fellowship.academyAwardWins} academy awards.`
    towersData.textContent = `${towers.name} is ${towers.runtimeInMinutes} minutes long, and recieved $${towers.boxOfficeRevenueInMillions} million in box office revenue. The movie has won ${towers.academyAwardWins} academy awards.`
    kingData.textContent = `${king.name} is ${king.runtimeInMinutes} minutes long, and recieved $${king.boxOfficeRevenueInMillions} million in box office revenue. The movie has won ${king.academyAwardWins} academy awards.`

    movieInfo.appendChild(fellowshipData)
    //movieInfo.appendChild(fellowshipImg)
    movieInfo.appendChild(towersData)
    // movieInfo.appendChild(towersImg)
    movieInfo.appendChild(kingData)
    //movieInfo.appendChild(kingImg)

}

function displayCharacterInfo(characterData) {
    let Aragorn = characterData.docs[39]
    let Arwen = characterData.docs[73]
    let Bilbo = characterData.docs[122]
    let Eowyn = characterData.docs[791]
    let Faramir = characterData.docs[287]
    let Frodo = characterData.docs[87]
    let Galadriel = characterData.docs[326]
    let Gandalf = characterData.docs[732]
    let Gimli = characterData.docs[355]
    let Gollum = characterData.docs[730]
    let Legolas = characterData.docs[449]
    let Sam = characterData.docs[333]

    let aragornData = document.createElement("p")
    let arwenData = document.createElement("p")
    let bilboData = document.createElement("p")
    let eowynData = document.createElement("p")
    let faramirData = document.createElement("p")
    let frodoData = document.createElement("p")
    let galadrielData = document.createElement("p")
    let gandalfData = document.createElement("p")
    let gimliData = document.createElement("p")
    let gollumData = document.createElement("p")
    let legolasData = document.createElement("p")
    let samData = document.createElement("p")

    aragornData.innerHTML = `${Aragorn.name} is a ${Aragorn.race} born in ${Aragorn.birth} and died in ${Aragorn.death}. He played a pivotal role in helping Frodo get the ring to mount doom, and in defending his allies right up until the end. Extra info found here: <a href="${Aragorn.wikiUrl}">Aragorn Wiki</a>`
    characters.appendChild(aragornData)
    arwenData.innerHTML = `${Arwen.name} is an ${Arwen.race} born in ${Arwen.birth} and died in ${Arwen.death}. She helped Frodo escape from orcs and was Aragorn's bride. Extra info found here: <a href="${Arwen.wikiUrl}">Arwen Wiki</a>`
    characters.appendChild(arwenData)
    bilboData.innerHTML = `${Bilbo.name} is a ${Bilbo.race} born on ${Bilbo.birth} and his death is ${Bilbo.death}. He is Frodo's uncle and was known to carry the ring of power for a time, but courageously gave it up to be destroyed. A well known previous member of the Shire. Extra info found here: <a href="${Bilbo.wikiUrl}">Bilbo Wiki</a>`
    characters.appendChild(bilboData)
    eowynData.innerHTML = `${Eowyn.name} is a Human born in ${Eowyn.birth} and died in ${Eowyn.death}. She was known throughout the land to be an exceptionally brave and stalwart young woman, who defeated the Witch King of Angmar, one who boldly declared that no man could defeat. Extra info found here: <a href="${Eowyn.wikiUrl}">Eowyn Wiki</a>`
    characters.appendChild(eowynData)
    faramirData.innerHTML = `${Faramir.name} is a ${Faramir.race} born in ${Faramir.birth} and died in ${Faramir.death}. He was a noble man who fought not only for Gondor and her people, but for the love of his father. Extra info found here: <a href="${Faramir.wikiUrl}">Faramir Wiki</a>`
    characters.appendChild(faramirData)
    frodoData.innerHTML = `${Frodo.name} is a ${Frodo.race} born on ${Frodo.birth} and his death is ${Frodo.death}. He was the one who bore the burden of taking the one ring to the fiery pits of mount doom, in exchange for great pain and sacrifice along the way. Extra info found here: <a href="${Frodo.wikiUrl}">Frodo Wiki</a>`
    characters.appendChild(frodoData)
    galadrielData.innerHTML = `${Galadriel.name} is an ${Galadriel.race} born in ${Galadriel.birth} and is ${Galadriel.death}. She is the elf queen and helped the fellowship of the ring on their journey, and who had the power to warn Frodo of his difficult future. Extra info found here: <a href="${Galadriel.wikiUrl}">Galadriel Wiki</a>`
    characters.appendChild(galadrielData)
    gandalfData.innerHTML = `${Gandalf.name} is a ${Gandalf.race} born ${Gandalf.birth} and died in ${Gandalf.death}. He was an incredible asset to both Frodo and Sam on their way to mordor, as well as in defeating Sauron's armies. A truly legendary man who defied the impossible, and often took matters into his own hands to change the course of history. Extra info found here: <a href="${Gandalf.wikiUrl}">Gandalf Wiki</a>`
    characters.appendChild(gandalfData)
    gimliData.innerHTML = `${Gimli.name} is a ${Gimli.race} born in ${Gimli.birth} and his death is ${Gimli.death}. He was a valuable warrior during the fight with Sauron and the orcs, and often provided comic relief during tense situations. Extra info found here: <a href="${Gimli.wikiUrl}">Gimli Wiki</a>`
    characters.appendChild(gimliData)
    gollumData.innerHTML = `${Gollum.name} is a ${Gollum.race} born in ${Gollum.birth} and died on ${Gollum.death}. He was greedy and evil, yet valuable and knowledgable all at the same time. Many hated him, some cared for him, but all who met him surely pitied him. He was a tragic example of one who sought for that which inevitably became his downfall. Extra info found here: <a href="${Gollum.wikiUrl}">Gollum Wiki</a>`
    characters.appendChild(gollumData)
    legolasData.innerHTML = `${Legolas.name} is an ${Legolas.race} born at an unknown date, but is known to be ${Legolas.death}. He was always at the side of Aragorn and Gimli, and became a great friend to them, always plunging himself into the forefront of battle. It is truly amazing what he can do with merely a bow and a few arrows. A fearless elf with great great abilities and a strong resolve. Extra info found here: <a href="${Legolas.wikiUrl}">Legolas Wiki</a>`
    characters.appendChild(legolasData)
    samData.innerHTML = `${Sam.name} is a ${Sam.race} born on ${Sam.birth} and is known to be ${Sam.death}. He stayed by Frodo's side at every footstep to help him carry the ring to be destroyed. He is someone you can rely on, someone who you know will never give up on you. And that he did for Frodo, even when all seemed lost. He is a beautiful example of one who will endure any hardship to save his friends. Extra info found here: <a href="${Sam.wikiUrl}">Samwise Wiki</a>`
    characters.appendChild(samData)
}
apiFetchCharacters()
apiFetchMovies()
apiFetchQuotes()