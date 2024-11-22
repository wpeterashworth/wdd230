let banner = document.querySelector("#banner")
let bannerButton = document.querySelector("#bannerToggle")

function showBanner() {
    const today = new Date().getDay()
    const targetDays = [1, 2, 3, 5]

    if (targetDays.includes(today)) {
        banner.style.display = "block"
    } else {
        banner.style.display = "none"
    }
}

bannerButton.addEventListener("click", () => {
    bannerButton.remove()
    banner.remove()
})

showBanner();