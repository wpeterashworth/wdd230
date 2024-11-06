const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

let confirmItem = document.querySelector("#confirm")

confirmItem.addEventListener("focusout", () => {
    let passwordItem = document.querySelector("#password")
    if (confirmItem.value != passwordItem.value) {
        document.querySelector("#message").innerText = "Passwords don't match!"
        passwordItem.focus()
        confirmItem.value = ""
        confirmItem.focus()
    }
    else {
        document.querySelector("#message").innerText = ""
    }
})