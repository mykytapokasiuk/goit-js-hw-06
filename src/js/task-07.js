const text = {
    fontsizecontrol: document.getElementById("font-size-control"),
    target: document.getElementById("text"),
    /**
     * Changes size of text
     * @param {event} event
     */
    changeFontSize(event) {
        this.target.style.fontSize = `${event.target.value}px`;
    },
};
text.fontsizecontrol.addEventListener("input", text.changeFontSize.bind(text));
