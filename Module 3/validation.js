const form = document.querySelector('.sign-up-form');
const name = document.querySelector('.name');
const email = document.querySelector('.email');
const newPassword = document.querySelector('.new-password');
const confirmPassword = document.querySelector('.confirm-password');

// fire the form validation function
form.addEventListener('submit', formValidation);

// Fire the name validation function
name.addEventListener('keyup', namveValidation);
name.addEventListener('paste', namveValidation);


// fire the email validation function
email.addEventListener('keyup', validationEmail);   
email.addEventListener('paste', validationEmail);


// fire the password validation function
newPassword.addEventListener('keyup', validatePassword);
newPassword.addEventListener('paste', validatePassword);


// fire the match password function
confirmPassword.addEventListener('keyup', matchPassword);
confirmPassword.addEventListener('paste', matchPassword);


function namveValidation(){
    const valid = /^[A-Za-z]+$/.test(this.value);
    const inValidText = "name should only letters";
    const validText = "name is valid";
    
    if(!valid){
        showError(this, inValidText);
    } else{
        showSuccess(this, validText);
    }
}



function validationEmail() {
    const valid = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/.test(this.value);
    const inValidText = "email is not valid";
    const validText = "email is valid";

    if(!valid){
        showError(this, inValidText);
    } else{
        showSuccess(this, validText);
    }
  }


  function validatePassword() {
    const valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(this.value);
    const inValidText = "Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit.";
    const validText = "Password is valid";

    if(!valid){
        showError(this, inValidText);
    } else{
        showSuccess(this, validText);
    }
  }


  function matchPassword(){
    const valid = newPassword.value === this.value;
    const inValidText = "Password did not match!";
    const validText = "Password is matched!";

    if(!valid){
        showError(this, inValidText);
    } else{
        showSuccess(this, validText);
    }
  }


  function showError(element, text){
    element.classList.remove('border-green-500');
    element.classList.add('border-red-500');
    element.nextElementSibling.textContent = text;
    element.nextElementSibling.classList.add('text-red-500');
    element.nextElementSibling.classList.remove('hidden');
}

function showSuccess(element, text){
    element.classList.remove('border-red-500');
    element.classList.add('border-green-500');
    element.nextElementSibling.textContent = text;
    element.nextElementSibling.classList.remove('text-red-500');
    element.nextElementSibling.classList.add('text-green-500');
    element.nextElementSibling.classList.remove('hidden');
}


function formValidation (e){
    e.preventDefault();

    isEmpty(name);
    isEmpty(email);
    isEmpty(newPassword);
    isEmpty(confirmPassword);

    

    // check empty value
    function isEmpty(element){
        if(element.value == "" || element.value.length < 1){
            element.classList.add('border-red-500');
            element.nextElementSibling.textContent = "field can not be empty";
            element.nextElementSibling.classList.add('text-red-500');
            element.nextElementSibling.classList.remove('hidden');
        } else{
            element.classList.remove('border-red-500');
            element.classList.remove('border-green-500');
            element.nextElementSibling.textContent = "";
            element.nextElementSibling.classList.remove('text-red-500');
            element.nextElementSibling.classList.add('hidden');
        }
    }
}