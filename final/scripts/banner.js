let banner = document.querySelector("#banner")
let bannerButton = document.querySelector("#bannerToggle")

bannerButton.addEventListener("click", () => {
    bannerButton.remove()
    banner.remove()
})