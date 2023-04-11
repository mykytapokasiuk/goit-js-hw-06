const numberOfElements = {
    dataLength: ~~document.querySelector("input").getAttribute("data-length"),
    targetElement: document.querySelector("input"),
    /**
     * Checks if right number of symbols have been entered
     * @param {event} event
     */
    countDataLength(event) {
        event.target.value.length === this.dataLength
            ? this.targetElement.classList.replace("invalid", "valid")
            : this.targetElement.classList.add("invalid");
    },
};
numberOfElements.targetElement.addEventListener(
    "blur",
    numberOfElements.countDataLength.bind(numberOfElements)
);
