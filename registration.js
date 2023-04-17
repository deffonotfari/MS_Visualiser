//forms
var form1 = document.getElementById('form1');
var form2 = document.getElementById('form2');
var form3 = document.getElementById('form3');
var form4 = document.getElementById('form4');

//buttons
var next1 = document.getElementById('next1');
var back1 = document.getElementById('back1');
var next2 = document.getElementById('next2');
var back2 = document.getElementById('back2');
var PersonalAcc = document.getElementById('PersonalAcc')
var BusinessAcc = document.getElementById('BusinessAcc')
var submit = document.getElementById('submit');
var submit2 = document.getElementById('submit2');

//progress bar
var progress = document.getElementById('progress');

//variables
var email = document.getElementById('email');
var email2 = document.getElementById('email2');
var pass = document.getElementById('pass');
var pass2 = document.getElementById('pass2');
var firstname = document.getElementById('firstname');
var surname = document.getElementById('surname');
var loc = document.getElementById('loc')
var businessName = document.getElementById('businessName');
var businessMarket = document.getElementById('businessMarket');
var businessLoc = document.getElementById('businessLoc');
var businessWeb = document.getElementById('businessWeb');
var popup = document.getElementById('popup')

//error 
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

//email validation
var isValidEmail = email => {
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(email).toLowerCase());
}

//checking if there are any letters 
var isAllLetters = element => { 
    var letters = /^[A-Za-z]+$/; //can only contain these things
    return letters.test(String(element));
}

var check = (false);
var emailcheck = (false);
var email2check = (false);
var passcheck = (false);
var pass2check = (false);

//moving between the pages
next1.onclick = function () {
    if (check === (false)) {
        if (email.value === "") {
            setError(email, "An email is required");
        }
        else {
            if (!isValidEmail(email.value)) {
                setError(email, "Provide a valid email address");
            } else {
                setSuccess(email);
                emailcheck = (true);
            }
        }

        if (email2.value === "") {
            setError(email2, "An email is required");
        } else {
            if (email.value !== email2.value) {
                setError(email2, 'Emails do not match');
            } else {
                setSuccess(email2);
                email2check = (true);
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

        if (pass2.value === "") { 
            setError(pass2, "A password is required"); 
        } else {
            if (pass2.value !== pass.value) { 
                setError(pass2, "Passwords do not match"); 
            } else {
                setSuccess(pass2); 
                pass2check = (true);
            }
        }

        let check2 = emailcheck && email2check && passcheck && pass2check;

        if(check2) {
            form1.style.left = "-450px"
            form2.style.left = "40px"
            progress.style.width = "240px"
        };
    };
};

back1.onclick = function () {
    form1.style.left = "40px"
    form2.style.left = "450px"
    progress.style.width = "120px"
};

back2.onclick = function () {
    form2.style.left = "40px"
    form3.style.left = "450px"
    progress.style.width = "240px"
};

back3.onclick = function () {
    form2.style.left = "40px"
    form4.style.left = "450px"
    progress.style.width = "240px"
};

PersonalAcc.onclick = function () {
    form2.style.left = "-450px"
    form3.style.left = "40px"
    progress.style.width = "360px"
};

BusinessAcc.onclick = function () {
    form2.style.left = "-450px"
    form4.style.left = "40px"
    progress.style.width = "360px"
};

//setting variable checks for form 3
var personalCheck = (false);
var firstnameCheck = (false);
var surnameCheck = (false);
var locCheck = (false);

//creating a validation requirements
submit.onclick = function() {
    if (personalCheck === (false)) {

        //checking if name is correct
        if (firstname.value === "") { 
            setError(firstname, "Error - field is empty"); //if input field empty, then set error
        } else{
            if (!isAllLetters(firstname.value)) {
                setError(firstname, "Error: Name cannot have numbers");
            } else{
                setSuccess(firstname); //else set success
                firstnameCheck = (true);
            }
        }

        //checking is surname is provided
        if (surname.value === "") { 
            setError(surname, "Error: Field is empty"); //if input field empty, then set error
        } else{
            if (!isAllLetters(surname.value)){ //checking for numbers
                setError(surname, "Error: Surname cannot have numbers") // if there are, then error
            } else{
                setSuccess(surname); //else set success
                surnameCheck = (true);
            } 
        }

        //checking if location is provided
        if (loc.value === "") { 
            setError(loc, "Error: field is empty"); //if input field empty, then set error
        } else{
            if (!isAllLetters(loc.value)){
                setError(loc, "Error: location cannot have nummbers"); //if input field empty, then set error
            } else{
                setSuccess(loc); //else set success
                locCheck = (true);
            }
        }

        //set personalCheck2 successful if they all successful
        let personalCheck2 = firstnameCheck && surnameCheck && locCheck;

        if (personalCheck2 === (true)) {
            alert("Successful registration")
            location.href = "enterdata.html" //would be taken to the next page as they have successfully registered
        }
    };
};


//setting variable checks for form 4
var businessCheck = (false);
var businessNameCheck = (false);
var businessMarketCheck = (false);
var businessLoccheck = (false);
var businesWebCheck = (false);

//creating a validation requirements
submit2.onclick = function() {
    if (businessCheck === (false)) {

        //checking if business name is correct
        if (businessName.value === "") { 
            setError(businessName, "The business name should be included"); //if input field empty, then set error
        } else{
            setSuccess(businessName); //else set success
            businessNameCheck = (true);
        }

        //checking is business market is provided
        if (businessMarket.value === "") { 
            setError(businessMarket, "Business market is required"); //if input field empty, then set error
        } else{
            setSuccess(businessMarket); //else set success
            businessMarketCheck = (true);
        }

        //checking if business location is provided
        if (businessLoc.value === "") { 
            setError(businessLoc, "Business loction is required"); //if input field empty, then set error
        } else{
            setSuccess(businessLoc); //else set success
            businesLoctCheck = (true);
        }

        //checking if a website is provided
        if (businessWeb.value === "") { 
            setError(businessWeb, "A websites link should be included"); //if input field empty, then set error
        } else{
            setSuccess(businessWeb); //else set success
            businesWebCheck = (true);
        }

        //set businessCheck2 successful if they all successful
        let businessCheck2 = businessNameCheck && businessMarketCheck && businesLoctCheck && businesWebCheck;

        if (businessCheck2 === (true)) {
            alert("Successful registration")
            location.href = "enterdata.html" //would be taken to the next page as they have successfully registered
        }
    };
};

