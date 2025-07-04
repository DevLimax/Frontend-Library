const userInputLogin = document.querySelector("#userinput");
const passwordInputLogin = document.querySelector("#passwordLogin");
const btn_login = document.querySelector("#btn-login");

document.querySelectorAll(".input-box input").forEach(input => {
            input.addEventListener("input", () => {
                input.parentElement.classList.remove("invalid");
            });
        }); 

btn_login.addEventListener("click", (e) => {
    e.preventDefault();
    const input_box = document.querySelectorAll(".input-box");
    if (userInputLogin.value == "" || passwordInputLogin.value == "") {
        input_box.forEach(input => {
            const campo = input.querySelector("input");
            if (campo.value.trim() === "") {
                input.classList.add("invalid");
            } else {
                input.classList.remove("invalid");
                
            }
        });
    }
})