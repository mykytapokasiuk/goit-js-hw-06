const background = {
    bodyElement: document.querySelector("body"),
    changeColorBtn: document.querySelector(".change-color"),
    colorValueOutputElement: document.querySelector(".color"),
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
     * Changes background color, outputs color value to the span element
     */
    changeBackgroundColor() {
        this.bodyElement.style.backgroundColor = this.getRandomHexColor();
        this.colorValueOutputElement.textContent = this.getRandomHexColor();
    },
};
background.changeColorBtn.addEventListener(
    "click",
    background.changeBackgroundColor.bind(background)
);
