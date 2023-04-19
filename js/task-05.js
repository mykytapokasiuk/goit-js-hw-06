const refs = {
    nameInput: document.getElementById("name-input"),
    nameOutput: document.getElementById("name-output"),
};
/**
 * Changes output text by input text
 * @param {event} event
 */
const changeOutputText = (event) => {
    refs.nameOutput.textContent =
        refs.nameInput.value.trim() === "" ? "Anonymous" : event.target.value.trim();
};
refs.nameInput.addEventListener("input", changeOutputText);
