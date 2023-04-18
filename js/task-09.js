const refs = {
    bodyElement: document.querySelector("body"),
    changeColorBtn: document.querySelector(".change-color"),
    colorValueOutputElement: document.querySelector(".color"),
};
/**
 * Creates random colors
 * @returns {string} Color in hex format
 */
const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
};
/**
 * Changes background color, outputs color value to the span element
 */
const changeBackgroundColor = () => {
    refs.bodyElement.style.backgroundColor = getRandomHexColor();
    refs.colorValueOutputElement.textContent = refs.bodyElement.style.backgroundColor;
};

refs.changeColorBtn.addEventListener("click", changeBackgroundColor);
