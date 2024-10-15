// In your js file, declare three const variables that hold references to the input, button, and list elements.
const favChap = document.querySelector("#favchap")
const submitButton = document.querySelector("#button")
const elementList = document.querySelector("#list")

// Create a click event listener for the Add Chapter button using addEventListener and an anonymous function or arrow function.
submitButton.addEventListener("click", () => {
    if (favChap.value == "") {
        favChap.focus();
        return;
    }
    let liElement = document.createElement("li");
    let deleteButton = document.createElement("button");
    liElement.textContent = favChap.value;
    deleteButton.innerHTML = "❌";
    liElement.append(deleteButton);
    elementList.append(liElement);
    deleteButton.addEventListener("click", () => {
        liElement.remove();
        favChap.focus();
    })
    favChap.value = "";
})