const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
/**
 * Creates new markup
 * @param {string} array Array of string, numbers, etc.
 * @param {string} tag The element tag
 * @param {string} className The element class name
 * @param {string} target Identifier, element class for the new markup
 * @returns {string} HTML elements, including attributes, tags in one string.
 */
function Markup(array, tag, className, target) {
    this.array = array;
    this.tag = tag;
    this.arrayWithMarkup = [];
    this.className = className;
    this.target = document.querySelector(target);
    this.addMarkup = function () {
        this.arrayWithMarkup = this.array.map((element) => {
            let tag = document.createElement(this.tag);
            tag.textContent = element;
            tag.classList.add(this.className);
            return tag.outerHTML;
        });
        return this.arrayWithMarkup.join("");
    };
}

const markupForIngredients = new Markup(ingredients, "li", "item", "#ingredients");
markupForIngredients.target.insertAdjacentHTML("afterbegin", markupForIngredients.addMarkup());
