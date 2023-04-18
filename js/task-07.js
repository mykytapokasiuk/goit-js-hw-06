const refs = {
    fontsizecontrol: document.getElementById("font-size-control"),
    targetElement: document.getElementById("text"),
};
refs.fontsizecontrol.setAttribute("value", "0");
/**
 * Changes size of text
 * @param {event} event
 */
const changeFontSize = (event) => {
    refs.targetElement.style.fontSize = `${event.target.value}px`;
};
refs.fontsizecontrol.addEventListener("input", changeFontSize);
