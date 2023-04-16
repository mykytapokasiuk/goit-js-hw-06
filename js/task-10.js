const collection = {
    createCollectionElementBtn: document.querySelector("button[data-create]"),
    destroyCollectionElementBtn: document.querySelector("button[data-destroy]"),
    targetElement: document.getElementById("boxes"),
    userInputElement: document.querySelector('[type="number"]'),
    width: 30,
    height: 30,
    numberOfDivs: 0,
    /**
     * Gets user input value
     * @param {event} event
     */
    getUserInput(event) {
        this.numberOfDivs = ~~event.currentTarget.value;
    },
    /**
     * Creates random colors
     * @returns {string} Color in hex format
     */
    getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, 0)}`;
    },
    /**
     * Creates markup of div elements with different colors and sizes, adds it to the DOM
     */
    createBoxes() {
        const markupArray = [];
        for (let i = 0; i < this.numberOfDivs; i++) {
            const divElement = document.createElement("div");
            if (this.numberOfDivs <= 1) {
                divElement.style.width = `${this.width}px`;
                divElement.style.height = `${this.height}px`;
            }
            divElement.style.width = `${this.width + i * 10}px`;
            divElement.style.height = `${this.height + i * 10}px`;
            divElement.style.backgroundColor = this.getRandomHexColor();
            markupArray.push(divElement);
        }
        this.targetElement.append(...markupArray);
    },
    /**
     * Clears markup and input field
     */
    destroyBoxes() {
        this.targetElement.innerHTML = "";
        this.userInputElement.value = "";
    },
};
collection.userInputElement.addEventListener("input", collection.getUserInput.bind(collection));
collection.createCollectionElementBtn.addEventListener(
    "click",
    collection.createBoxes.bind(collection)
);
collection.destroyCollectionElementBtn.addEventListener(
    "click",
    collection.destroyBoxes.bind(collection)
);
