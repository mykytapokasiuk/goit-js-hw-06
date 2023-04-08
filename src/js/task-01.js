/**
 * ! Let`s go;)
 */
const categories = {
    numberOfCategories: 0,
    /**
     * Gets number of categories
     */
    addNumberOfCategories() {
        this.numberOfCategories = document.querySelectorAll(".item").length;
    },
    /**
     * Outputs the number of categories to the console
     */
    getNumberOfCategories() {
        console.log(`Number of categories: ${this.numberOfCategories}`);
    },
    categoryText: [],
    /**
     * Gets name each of category
     */
    addCategoryText() {
        const listOfLiItems = document.querySelectorAll(".item");
        listOfLiItems.forEach((element) => {
            this.categoryText.push(element.firstElementChild.textContent);
        });
    },
    /**
     * Outputs name and number each of category to the console
     * @param {number} array
     */
    getCategoryText(array) {
        this.categoryText.forEach((element, i) => {
            console.log(`Category: ${element}\nElements: ${array[i]}`);
        });
    },
    numberOfElements: [],
    /**
     * Gets number of 'li' elements each of category
     */
    addNumberOfElements() {
        const listOfUlItems = document.querySelectorAll(".item > ul");
        listOfUlItems.forEach((element) => {
            this.numberOfElements.push(element.children.length);
        });
    },
};
categories.addNumberOfCategories();
categories.getNumberOfCategories();
categories.addCategoryText();
categories.addNumberOfElements();
categories.getCategoryText(categories.numberOfElements);
