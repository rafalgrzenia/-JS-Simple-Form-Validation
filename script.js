
// Elements 

const form = document.querySelector("#form")
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirmation");
const terms = document.querySelector("#terms");
const errorList = document.querySelector(".errors-list");
const errorsContainer = document.querySelector(".errors");

// Event

form.addEventListener("submit", event => {
  const errorMessages = [];
  
  clearErrors();
  
  if(username.value.length < 6) {
    errorMessages.push("Username must be at least 6 characters long");
  }


  if(password.value.length < 10) {
    errorMessages.push("Password must be at least 10 characters long");
  }


  if((password.value !== passwordConfirm.value) && (password.value && passwordConfirm !== undefined)) {
    errorMessages.push("Password must match");
  }


  if(!terms.checked) {
    errorMessages.push("You must accept the terms");
  }

  if(errorMessages.length > 0 ) {
    event.preventDefault();
    showErrors(errorMessages);
  }

  

})

// Functions

function clearErrors() {


  while(errorList.children[0] != null) {
    errorList.removeChild(errorList.children[0]);
  }

  errorsContainer.classList.remove("show");

}

function showErrors(errorMessages) {

  errorMessages.forEach(error => {
    const li = document.createElement("li");
    li.innerText = error;
    errorList.appendChild(li);
  })

  errorsContainer.classList.add("show");

}
