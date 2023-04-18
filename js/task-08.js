const refs = {
    formElement: document.querySelector(".login-form"),
};
/**
 * Checks, if all the form fields was filled in, clears all form fields
 * @param {event} event
 */
const handleSubmit = (event) => {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        alert("Please, fill in all the form fields!");
        return;
    }
    const userInfo = {
        email: email.value,
        password: password.value,
    };
    console.log(userInfo);
    event.currentTarget.reset();
};
refs.formElement.addEventListener("submit", handleSubmit);
