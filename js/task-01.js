const refs = {
    listOfLiItems: document.querySelectorAll(".item"),
};
/**
 * Outputs number of categories, name and number each of category to the console
 */
const logCategoryData = () => {
    console.log(`Number of categories: ${refs.listOfLiItems.length}`);
    refs.listOfLiItems.forEach((element) => {
        console.log(
            `Category: ${element.firstElementChild.textContent}\nElements: ${element.lastElementChild.children.length}`
        );
    });
};
logCategoryData();
