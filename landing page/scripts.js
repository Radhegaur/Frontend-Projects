const signupModel = document.querySelector(".signup-form-wrapper");
const loginModel = document.querySelector(".login-form-wrapper");
const signupBtn = document.querySelector(".signup-btn");
const loginBtn = document.querySelector(".login-btn");
const signupX = document.querySelector(".signup-x");
const loginX = document.querySelector(".login-x");
const formContainer = document.querySelector(".form-container");

signupBtn.addEventListener("click", ()=>{
    signupModel.classList.add("display");
    formContainer.classList.add("disable");
});
loginBtn.addEventListener("click", ()=>{
    loginModel.classList.add("display");
    formContainer.classList.add("disable");
});
signupX.addEventListener("click", ()=>{
    signupModel.classList.remove("display");
    formContainer.classList.remove("disable");
});

loginX.addEventListener("click", ()=>{
    loginModel.classList.remove("display");
    formContainer.classList.remove("disable");
});
