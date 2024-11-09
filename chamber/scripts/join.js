let button = document.querySelector("#submitButton")

button.addEventListener('click', setDateOfSubmission)

function setDateOfSubmission() {
    document.querySelector("#dateTime").value = Date.now()
}