/**
 * ! Let`s go;)
 */
const categories = {
    numberOfCategories: document.querySelectorAll(".item").length,
    listOfLiItems: document.querySelectorAll(".item"),
    listOfUlItems: document.querySelectorAll(".item > ul"),
    categoryText: [],
    numberOfElements: [],
    /**
     * Outputs the number of categories to the console
     */
    getNumberOfCategories() {
        console.log(`Number of categories: ${this.numberOfCategories}`);
    },
    /**
     * Gets name each of category
     */
    addCategoryText() {
        this.listOfLiItems.forEach((element) => {
            this.categoryText.push(element.firstElementChild.textContent);
        });
    },
    /**
     * Gets number of 'li' elements each of category
     */
    addNumberOfElements() {
        this.listOfUlItems.forEach((element) => {
            this.numberOfElements.push(element.children.length);
        });
    },
    /**
     * Outputs name and number each of category to the console
     * @param {number} array Array of numbers
     */
    getCategoryText(array) {
        this.categoryText.forEach((element, i) => {
            console.log(`Category: ${element}\nElements: ${array[i]}`);
        });
    },
};
categories.getNumberOfCategories();
categories.addCategoryText();
categories.addNumberOfElements();
categories.getCategoryText(categories.numberOfElements);
