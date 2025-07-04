const first_name = document.querySelector("#first_name");
const last_name = document.querySelector("#last_name");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const enrollment = document.querySelector("#enrollment");
const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm_password");
const btn_register = document.querySelector("#btn-register");

btn_register.addEventListener("click", (e) => {
    e.preventDefault();

    if (first_name.value == "" || last_name.value == "" || phone.value == "" || email.value == "" || password.value == "" || confirm_password.value == "") {
        
    }
})