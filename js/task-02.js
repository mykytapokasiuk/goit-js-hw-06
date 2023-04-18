const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const refs = {
    targetUlElement: document.getElementById("ingredients"),
};
/**
 * Creates new markup and add it to the DOM
 */
const createMarkup = () => {
    const vegetablesMarkup = ingredients.map((element) => {
        const liElement = document.createElement("li");
        liElement.textContent = element;
        liElement.classList.add("item");
        return liElement;
    });
    refs.targetUlElement.append(...vegetablesMarkup);
};
createMarkup();
