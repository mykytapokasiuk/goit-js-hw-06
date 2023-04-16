const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
/**
 * Creates new markup
 * @param {array} array Array of string, numbers, etc.
 * @param {string} tag The element tag
 * @param {string} className The element class name
 * @param {string} target Identifier, element class for the new markup
 * @returns {string} HTML elements, including attributes, tags.
 */
function Markup(array, tag, className, target) {
    this.array = array;
    this.tag = tag;
    this.arrayWithMarkup = [];
    this.className = className;
    this.target = document.querySelector(target);
    this.createMarkup = function () {
        this.arrayWithMarkup = this.array.map((element) => {
            const liElement = document.createElement(this.tag);
            liElement.textContent = element;
            liElement.classList.add(this.className);
            return liElement;
        });
    };
}
const vegetablesMarkup = new Markup(ingredients, "li", "item", "#ingredients");
vegetablesMarkup.createMarkup();
vegetablesMarkup.target.append(...vegetablesMarkup.arrayWithMarkup);
