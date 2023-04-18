const refs = {
    createCollectionElementBtn: document.querySelector("button[data-create]"),
    destroyCollectionElementBtn: document.querySelector("button[data-destroy]"),
    targetElement: document.getElementById("boxes"),
    userInputElement: document.querySelector('[type="number"]'),
    minUserInput: ~~document.querySelector('[type="number"]').getAttribute("min"),
    maxUserInput: ~~document.querySelector('[type="number"]').getAttribute("max"),
    numberOfDivs: 0,
    step: ~~document.querySelector('[type="number"]').getAttribute("step"),
};
/**
 * Gets user input value
 * @param {event} event
 */
const getUserInput = (event) => {
    refs.numberOfDivs = ~~event.currentTarget.value;
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
 * Creates markup of div elements with different colors and sizes, adds it to the DOM
 */
const createBoxes = () => {
    const markupArray = [];
    for (let i = 0; i < refs.numberOfDivs; i += refs.step) {
        const divElement = document.createElement("div");
        if (refs.numberOfDivs === refs.minUserInput) {
            divElement.style.width = `30px`;
            divElement.style.height = `30px`;
        } else if (refs.numberOfDivs < refs.minUserInput || refs.numberOfDivs > refs.maxUserInput)
            return;
        divElement.style.width = `${30 + i * 10}px`;
        divElement.style.height = `${30 + i * 10}px`;
        divElement.style.backgroundColor = getRandomHexColor();
        markupArray.push(divElement);
    }
    refs.targetElement.append(...markupArray);
    refs.numberOfDivs = 0;
    refs.userInputElement.value = "";
};
/**
 * Clears markup and input field
 */
const destroyBoxes = () => {
    refs.targetElement.innerHTML = "";
    refs.userInputElement.value = "";
    refs.numberOfDivs = 0;
};

refs.userInputElement.addEventListener("input", getUserInput);
refs.createCollectionElementBtn.addEventListener("click", createBoxes);
refs.destroyCollectionElementBtn.addEventListener("click", destroyBoxes);
