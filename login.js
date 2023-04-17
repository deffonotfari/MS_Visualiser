//forms
var form1 = document.getElementById('form1');

//buttons
var submit = document.getElementById('submit');

//variables
var email = document.getElementById('email');
var pass = document.getElementById('pass');

//error message
var setError = (element, message) => {
    const field = element.parentElement;
    const errorDisplay = field.querySelector('.error');

    errorDisplay.innerText = message;
    field.classList.add('error');
    field.classList.remove('success');
};

//no error
var setSuccess = element => { //no message needs to be displayed
    var field = element.parentElement;
    var errorDisplay = field.querySelector('.error');

    errorDisplay.innerText = '';
    field.classList.add('success'); //adds the success rather than error
    field.classList.remove('error');
};

//validating email
var isValidEmail = email => {
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(email).toLowerCase());
};

//setting validations check false
var check = (false);
var emailcheck = (false);
var passcheck = (false);

//before submitting, validation needs to be done:
submit.onclick = function () {
    if (check === (false)) {
        if (email.value === "") {
            setError(email, "Email is required");
        }
        else {
            if (!isValidEmail(email.value)) {
                setError(email, "Provide a valid email address");
            } else {
                setSuccess(email);
                emailcheck = (true);
            }
        }

        if (pass.value === "") {
            setError(pass, "A password is required"); 
        } else {
            if (pass.value.length < 8) { 
                setError(pass, "Password must be atleast 8 characters"); 
            } else {
                setSuccess(pass); 
                passcheck = (true);
            }
        }

        let check2 = emailcheck && passcheck ;

        if(check2) {
            //if not, then error message
            //redirecte to another page
            alert("You have successfully logged in")
            location.href = "enterdata.html"
        };
    }
}
