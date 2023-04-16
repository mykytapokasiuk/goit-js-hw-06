/**
 * ! Let`s go;)
 */
const categories = {
    numberOfCategories: document.querySelectorAll(".item").length,
    listOfLiItems: document.querySelectorAll(".item"),
    listOfUlItems: document.querySelectorAll(".item > ul"),
    /**
     * Outputs number of categories, name and number each of category to the console
     */
    logCategoryData() {
        console.log(`Number of categories: ${this.numberOfCategories}`);
        this.listOfLiItems.forEach((element, i) => {
            console.log(
                `Category: ${element.firstElementChild.textContent}\nElements: ${this.listOfUlItems[i].children.length}`
            );
        });
    },
};
categories.logCategoryData();
