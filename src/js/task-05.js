const textOutput = {
    nameInput: document.getElementById("name-input"),
    nameOutput: document.getElementById("name-output"),
    /**
     * Changes output text by input text
     * @param {event} event
     */
    changeOutputText(event) {
        this.nameOutput.textContent = event.target.value;
    },
    /**
     * Returns the default text
     * @param {event} event
     */
    returnOutputText(event) {
        if (event.target.value === "") {
            this.nameOutput.textContent = "Anonymous";
        }
    },
};
textOutput.nameInput.addEventListener("input", textOutput.changeOutputText.bind(textOutput));
textOutput.nameInput.addEventListener("input", textOutput.returnOutputText.bind(textOutput));
