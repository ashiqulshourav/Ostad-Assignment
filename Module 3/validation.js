const form = document.querySelector('.sign-up-form');
const email = document.querySelector('.email');
const newPassword = document.querySelector('.new-password');
const confirmPassword = document.querySelector('.confirm-password');


email.addEventListener('keyup', validationEmail);   
email.addEventListener('paste', validationEmail);

newPassword.addEventListener('keyup', validatePassword);
newPassword.addEventListener('paste', validatePassword);
// confirmPassword.addEventListener('keyup', validatePassword);
// confirmPassword.addEventListener('paste', validatePassword);



function validationEmail() {
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
    const valid = emailRegex.test(email.value);

    if(!valid){
        email.classList.remove('border-green-500');
        email.classList.add('border-red-500');
        email.nextElementSibling.textContent = "email is not valid!";
        email.nextElementSibling.classList.add('text-red-500');
        email.nextElementSibling.classList.remove('text-green-500');
        email.nextElementSibling.classList.remove('hidden');
    } else{
        email.classList.add('border-green-500');
        email.classList.remove('border-red-500');
        email.nextElementSibling.textContent = "email is valid!";
        email.nextElementSibling.classList.remove('text-red-500');
        email.nextElementSibling.classList.add('text-green-500');
    }
  }

  function validatePassword() {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const valid = passwordRegex.test(newPassword.value);

    if(!valid){
        newPassword.classList.remove('border-green-500');
        newPassword.classList.add('border-red-500');
        newPassword.nextElementSibling.textContent = " Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit.";
        newPassword.nextElementSibling.classList.add('text-red-500');
        newPassword.nextElementSibling.classList.remove('text-green-500');
        newPassword.nextElementSibling.classList.remove('hidden');
    } else{
        newPassword.classList.add('border-green-500');
        newPassword.classList.remove('border-red-500');
        newPassword.nextElementSibling.textContent = "Password is valid";
        newPassword.nextElementSibling.classList.add('text-red-500');
        newPassword.nextElementSibling.classList.remove('text-green-500');
        newPassword.nextElementSibling.classList.remove('hidden');
    }
  }


function formValidation (e){
    e.preventDefault();

    const name = this.querySelector('.name');


    isEmpty(name);
    isEmpty(email);
    isEmpty(newPassword);
    isEmpty(confirmPassword);



    // check empty value
    function isEmpty(element){
        if(element.value == ""){
            element.classList.add('border-red-500');
            element.nextElementSibling.textContent = "field can not be empty";
            element.nextElementSibling.classList.add('text-red-500');
            element.nextElementSibling.classList.remove('hidden');
        } else{
            element.classList.remove('border-red-500');
            element.nextElementSibling.textContent = "";
            element.nextElementSibling.classList.remove('text-red-500');
            element.nextElementSibling.classList.add('hidden');

            nameChecked();
        }
    }

    function nameChecked(){
        const value = name.value;
        const validText = /^[A-Za-z]+$/.test(value);

        if(!validText){
            name.classList.remove('border-green-500');
            name.classList.add('border-red-500');
            name.nextElementSibling.textContent = "name should only letters";
            name.nextElementSibling.classList.add('text-red-500');
            name.nextElementSibling.classList.remove('hidden');
        } else{
            name.classList.remove('border-red-500');
            name.classList.add('border-green-500');
            name.nextElementSibling.textContent = "name is valid";
            name.nextElementSibling.classList.remove('text-red-500');
            name.nextElementSibling.classList.add('text-green-500');
            name.nextElementSibling.classList.remove('hidden');
        }
    }

    // console.log(name.value);
    // console.log(email.value);
    // console.log(newPassword.value);
    // console.log(confirmPassword.value);
}



form.addEventListener('submit', formValidation);