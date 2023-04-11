const counter = {
    counterValue: 0,
    shownValue: document.getElementById("value"),
    valueIncrementBtn: document.querySelector('button[data-action="increment"]'),
    valueDecrementBtn: document.querySelector('button[data-action="decrement"]'),
    /**
     * Increments the counter value by 1
     */
    incrementValue() {
        this.counterValue += 1;
        this.shownValue.textContent = this.counterValue;
    },
    /**
     * Decrements the counter value by 1
     */
    decrementValue() {
        this.counterValue -= 1;
        this.shownValue.textContent = this.counterValue;
    },
};
counter.valueIncrementBtn.addEventListener("click", counter.incrementValue.bind(counter));
counter.valueDecrementBtn.addEventListener("click", counter.decrementValue.bind(counter));
