const refs = {
    dataLength: ~~document.querySelector("input").getAttribute("data-length"),
    targetElement: document.querySelector("input"),
};
/**
 * Checks if right number of symbols have been entered, removes all white spaces
 * @param {event} event
 */
const countDataLength = (event) => {
    event.target.value.trim().split(" ").join("").length === refs.dataLength
        ? (refs.targetElement.className = "valid")
        : (refs.targetElement.className = "invalid");
};
refs.targetElement.addEventListener("blur", countDataLength);
