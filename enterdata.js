//forms
var form1 = document.getElementById('form1');

//buttons
var submit = document.getElementById('submit');

//variables
var revenue = document.getElementById('revenue');
var year = document.getElementById('year');

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

//setting validations check false
var check = (false);
var emailcheck = (false);
var passcheck = (false);

//before submitting, validation needs to be done:
submit.onclick = function () {
    if (check === (false)) {

        //if the field is left by user
        if (revenue.value === "") {
            setError(revenue, "Empty field - Please Enter Something"); //error message will be diplsayed
        }
        else {
            //if value is a negative number
            if (revenue.value < 0) {
                setError(revenue, "Revenue cannot be negative") //error message will be displayed
            } else{
                setSuccess(revenue); //else, it will be set as a success
                revenuecheck = (true);
            }
        }

        //if the year field is left empty by the user
        if (year.value === "") {
            setError(year, "Empty Field - Please Enter Something"); //error message needs to be displayed
        } else {
            if (year.value.length != 4) {  //if the length of the year value is smaller than 4
                setError(year, "Year must be in the XXXX format"); //error message needs to be displayed
            } else {
                if (year.value < 0) { //if year value is negative
                    setError(year, "Year cannot be a negative integer") //then error message needs to be displayed
                } else{
                    setSuccess(year); //otheriwse, it will be considered valid
                    yearcheck = (true);
                }
            }
        }

        let check2 = revenuecheck && yearcheck ;

        if(check2) {
        };
    }
}