//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password

var generateButton = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;


//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters

function determineLength() {
 passwordLength = prompt("How many characters long would you like your password to be (between 8-128 characters)");

 if (passwordLength<8) {
     alert("Password length must be a number between 8-128")
 } else if (passwordLength>128) {
     alert("Password length must be a number between 8-128")
 } else if (isNaN(passwordLength)) {
     alert("Password length must be a number between 8-128");
     determineLength();
 } else{
    alert("The next three screens will ask you what types of characters you would like to be included in your password.\nIf you choose 'No' for all, your password will only contain lowercase letters.");
    }
 
 return passwordLength;
}

//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
function determineUppercase() {
    uppercaseCheck = prompt("Do you want to include uppercase letters in you password? \n (Yes or No)");
    uppercaseCheck = uppercaseCheck.toLowerCase();{

        if (uppercaseCheck === null || uppercaseCheck === "") {
            alert("Please answer Yes or No");
            determineUppercase();

        }else if (uppercaseCheck) {

        }
    }



//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected




//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria




//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page