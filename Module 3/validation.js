const form = document.querySelector('.sign-up-form');
const name = document.querySelector('.name');
const email = document.querySelector('.email');
const newPassword = document.querySelector('.new-password');
const confirmPassword = document.querySelector('.confirm-password');

// fire the form validation function
form.addEventListener('submit', formValidation);

// Fire the name validation function
name.addEventListener('keyup', function() {
    nameValidation(this);
});

name.addEventListener('paste', function() {
    nameValidation(this);
});



// f.Fire the email validation function
email.addEventListener('keyup', function() {
    validationEmail(this);
});

email.addEventListener('paste', function() {
    validationEmail(this);
});


// // fire the password validation function
newPassword.addEventListener('keyup', function() {
    validatePassword(this);
});

newPassword.addEventListener('paste', function() {
    validatePassword(this);
});


// // fire the match password function
confirmPassword.addEventListener('keyup', function() {
    matchPassword(this);
});

confirmPassword.addEventListener('paste', function() {
    matchPassword(this);
});


function nameValidation(element) {
    const valid = /^[A-Za-z]+$/.test(element.value);
    const inValidText = "name should only letters";
    const validText = "name is valid";

    if (!valid || element.value.length < 1) {
        showError(element, inValidText);
    } else {
        showSuccess(element, validText);
    }
}



function validationEmail(element) {
    const valid = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/.test(element.value);
    const inValidText = "email is not valid";
    const validText = "email is valid";

    if (!valid || element.value.length < 1) {
        showError(element, inValidText);
    } else {
        showSuccess(element, validText);
    }
}


function validatePassword(element) {
    const valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(element.value);
    const inValidText = "Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit.";
    const validText = "Password is valid";

    if (!valid || element.value.length < 1) {
        showError(element, inValidText);
    } else {
        showSuccess(element, validText);
    }
}


function matchPassword(element) {
    const valid = newPassword.value === element.value;
    const inValidText = "Password did not match!";
    const validText = "Password is matched!";

    if (!valid || element.value.length < 1) {
        showError(element, inValidText);
    } else {
        showSuccess(element, validText);
    }
}


function showError(element, text) {
    console.log(element.value, element.value.length, "ShowError")
    element.classList.remove('border-green-500');
    element.classList.add('border-red-500');
    element.nextElementSibling.textContent = text;
    element.nextElementSibling.classList.add('text-red-500');
    element.nextElementSibling.classList.remove('text-green-500');
    element.nextElementSibling.classList.remove('hidden');
}

function showSuccess(element, text) {
    console.log(element, element.value, element.value.length, "ShowSuccess")
    if (element.classList.contains('border-red-500')) {
        element.classList.add('border-green-500');
    }
    element.classList.remove('border-red-500');
    element.nextElementSibling.textContent = text;
    element.nextElementSibling.classList.remove('text-red-500');
    element.nextElementSibling.classList.add('text-green-500');
}


function formValidation(e) {
    e.preventDefault();

    let hasError = false;
    const formData = {};

    const fields = [
        { element: name, validationFunction: nameValidation },
        { element: email, validationFunction: validationEmail },
        { element: newPassword, validationFunction: validatePassword },
        { element: confirmPassword, validationFunction: matchPassword }
    ];

    fields.forEach(function(field) {
        const element = field.element;
        const validationFunction = field.validationFunction;

        if (isEmpty(element)) {
            validationFunction(element);
            hasError = true;
        } else {
            formData[element.name] = element.value;
        }
    });


    // check empty value
    function isEmpty(element) {
        if (element.value == "" || element.value.length < 1) {
            element.classList.add('border-red-500');
            element.classList.remove('border-green-500');
            element.nextElementSibling.textContent = "field can not be empty";
            element.nextElementSibling.classList.add('text-red-500');
            element.nextElementSibling.classList.remove('text-green-500');
            element.nextElementSibling.classList.remove('hidden');
            return false
        } else {
            element.classList.remove('border-red-500');
            element.classList.remove('border-green-500');
            element.nextElementSibling.textContent = "";
            element.nextElementSibling.classList.remove('text-red-500');
            element.nextElementSibling.classList.remove('text-green-500');
            element.nextElementSibling.classList.add('hidden');
            return true
        }
    }
}