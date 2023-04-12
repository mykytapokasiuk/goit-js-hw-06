const form = {
    formElement: document.querySelector(".login-form"),
    /**
     * Creates object
     * @param {string} email
     * @param {string} password
     */
    UserInfo: function (email, password) {
        (this.email = email), (this.password = password);
    },
    /**
     * Logs new object to the console created by UserInfo(constructor)
     */
    logUserInfo() {
        const {
            elements: { email, password },
        } = this.formElement;
        const userInfo = new this.UserInfo(email.value, password.value);
        console.log(userInfo);
    },
    /**
     * Checks, if all the form fields was filled, fires logUserInfo method, clears all form fields
     * @param {event} event
     */
    onSubmit(event) {
        event.preventDefault();
        const {
            elements: { email, password },
        } = event.currentTarget;
        if (email.value === "" || password.value === "") {
            alert("Please, fill all form fields!");
        } else if (email.value !== "" && password.value !== "") {
            this.logUserInfo();
            event.currentTarget.reset();
        } else "";
    },
};
form.formElement.addEventListener("submit", form.onSubmit.bind(form));
