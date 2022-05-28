import { thankYouUI } from "./thankYouUI";

function formValidation() {

    const form = document.querySelector('form');

    const email = document.querySelector('#email');
    const emailError = document.querySelector('.error-email');
    
    const country = document.querySelector('#country');
    const countryError = document.querySelector('.error-country');
    
    const zipCode = document.querySelector('#zip-code');
    const zipCodeError = document.querySelector('.error-zip');
    
    const password = document.querySelector('#password');
    const passError = document.querySelector('.error-pass');
    
    const passwordTwo = document.querySelector('#password-two');
    const passTwoError = document.querySelector('.error-passtwo');
    
    //////////////////// ERROR MESSAGES
    
    function showErrorEmail() {
        if(email.validity.valueMissing) {
            // if field is empty, display error
            emailError.textContent = 'You need to enter an e-mail address.';
        } else if(email.validity.tooShort) {
            // if email is too short, display message
            emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
        } else if(email.validity.typeMismatch) {
            emailError.textContent = 'Enter a valid email.';
        };
        // adds active error class
        emailError.classList.add('active-error');
    };
    
    function showErrorCountry() {
        if(country.validity.valueMissing) {
            // if field is empty, display error
            countryError.textContent = 'Please enter the country.'
            // if too short, display message
        } else if(country.validity.tooShort) {
            countryError.textContent = `Country should be at least ${country.minLength} characters; you entered
            ${country.value.length}.`;
        };
             // adds active error class
            countryError.classList.add('active-error');       
    };
    
    function showErrorZip() {
        if(zipCode.validity.valueMissing) {
            // if field is empty, display error
            zipCodeError.textContent = 'Please enter a zip code.';
            // if too short, display message
        } else if (zipCode.validity.patternMismatch) {
            zipCodeError.textContent = `Zip Code should be at least 5 characters; you entered
            ${zipCode.value.length}.`;
        };
            // adds active error class
            zipCodeError.classList.add('active-error');
    };
    
    
    function showErrorPassword() {
        if(password.validity.patternMismatch) {
            // if pattern does not match, display message
            passError.textContent = 'Password requires minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.'
        };
            // adds active error class
            passError.classList.add('active-error');
    };
    
    
    function showErrorPasswordTwo() {
        if(passwordTwo.validity.patternMismatch) {
            // if pattern does not match, display message
            passTwoError.textContent = 'Password requires minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.'
        };
            // adds active error class
            passTwoError.classList.add('active-error');
    };
    
    //////////////////// ERROR MESSAGES
    
    
    
    email.addEventListener('input', function() {
        // if valid remove text and remove active error
        if(email.validity.valid) {
            emailError.textContent = '';
            emailError.classList.remove('active-error');
        } else {
            showErrorEmail();
        };
    });


    country.addEventListener('input', function() {
        // if valid remove text and remove active error
        if(country.validity.valid) {
            countryError.textContent = '';
            countryError.classList.remove('active-error');
        } else {
            showErrorCountry();
        };
    });

    zipCode.addEventListener('input', function() {
        // if valid remove text and remove active error
        if(zipCode.validity.valid) {
            zipCodeError.textContent = '';
            zipCodeError.classList.remove('active-error');
        } else {
            showErrorZip();
        };
    });

    password.addEventListener('input', function() {
        // if valid remove text and remove active error
        if(password.validity.valid) {
            passError.textContent = '';
            passError.classList.remove('active-error');
        } else {
            showErrorPassword();
        };
    });

    passwordTwo.addEventListener('input', function() {
        // if valid remove text and remove active error
        if(passwordTwo.validity.valid) {
            passTwoError.textContent = '';
            passTwoError.classList.remove('active-error');
        } else {
            showErrorPasswordTwo();
        };
    });

    
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if(!email.validity.valid) {
            showErrorEmail();
        } else if (!country.validity.valid) {
            e.preventDefault;
            showErrorCountry();
        } else if (!zipCode.validity.valid) {
            showErrorZip();
        } else if (!password.validity.valid) {
            showErrorPassword();
        } else if (!passwordTwo.validity.valid) {
            showErrorPasswordTwo();
        } else if(password.value !== passwordTwo.value) {
            passError.textContent = 'Passwords do not match.';
            passError.classList.add('active-error');
            passTwoError.textContent = 'Passwords do not match.';
            passError.classList.add('active-error');
        } else {
            form.remove();
            thankYouUI();
        }        
        
    });

    
};







export {formValidation};