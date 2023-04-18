const refs = {
    shownValue: document.getElementById("value"),
    valueIncrementBtn: document.querySelector('button[data-action="increment"]'),
    valueDecrementBtn: document.querySelector('button[data-action="decrement"]'),
};
let counterValue = 0;
/**
 * Increments the counter value by 1
 */
const incrementValue = () => {
    counterValue += 1;
    refs.shownValue.textContent = counterValue;
};
/**
 * Decrements the counter value by 1
 */
const decrementValue = () => {
    counterValue -= 1;
    refs.shownValue.textContent = counterValue;
};

refs.valueIncrementBtn.addEventListener("click", incrementValue);
refs.valueDecrementBtn.addEventListener("click", decrementValue);
