// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;



function generatePassword(){
  console.log("Hey you clicked the Button!");
    determineLength();
    console.log(passwordLength);
    determineUppercase();
    console.log(uppercaseCheck);
    determineNumbers();
    console.log(numberCheck);
    determineSpecial();
    console.log(specialCheck);
}

// 1. Series of prompts with password criteria 


// 1a. Length of criteria of at least 8-128 characters

        function determineLength(){
        passwordLength = prompt("Choose how many characters long you'd like your password to be (between 8-128 characters): ");
        
          if (passwordLength<8){
            alert("Password length must be a number between 8-128 characters");
            determineLength();
          }else if (passwordLength>128){
            alert("Password length must be a number between 8-128 characters");
            determineLength();
          }else if (isNaN(passwordLength)){
            alert("Password length must be a number between 8-128 characters");
            determineLength();
          }else{
          alert("The next four screens will ask you what types of characters you would like to be included in your password.");
          }
          return passwordLength;
       }


       
// 1b. Character types to include upppercase, lowercase, nemeric, and/or special characters



// Uppercase 

        function determineUppercase(){
        uppercaseCheck = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
          uppercaseCheck = uppercaseCheck.toLowerCase();
        
          if (uppercaseCheck === null || uppercaseCheck === ""){
            alert("Please answer Yes or No");
            determineUppercase();
        
          }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
            uppercaseCheck = true;
            return uppercaseCheck;
        
          }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
            uppercaseCheck = false;
            return uppercaseCheck;
         
          }else {
            alert("Please answer Yes or No");
            determineUppercase();
          }
          return uppercaseCheck;
       }


// Numbers

    function determineNumbers(){
    numberCheck = prompt("Do you want to include numbers in your password? \n(Yes or No)");
      numberCheck = numberCheck.toLowerCase();
    
      if (numberCheck === null || numberCheck === ""){
        alert("Please answer Yes or No");
        determineNumbers();
    
      }else if (numberCheck === "yes" || numberCheck ==="y"){
        numberCheck = true;
        return numberCheck;
    
      }else if (numberCheck === "no" || numberCheck ==="n"){
        numberCheck = false;
        return numberCheck;
     
      }else {
        alert("Please answer Yes or No");
        determineNumbers();
      }
      return numberCheck;
   }


// Special Characters

    function determineSpecial(){
    specialCheck = prompt("Do you want to include special characters in your password? \n(Yes or No)");
      specialCheck = specialCheck.toLowerCase();
    
      if (specialCheck === null || specialCheck === ""){
        alert("Please answer Yes or No");
        determineSpecial();
    
      }else if (specialCheck === "yes" || specialCheck ==="y"){
        specialCheck = true;
        return specialCheck;
    
      }else if (specialCheck === "no" || specialCheck ==="n"){
        specialCheck = false;
        return specialCheck;
     
      }else {
        alert("Please answer Yes or No");
        determineSpecial();
      }
      return specialCheck;
   }


// 2. Validate the input    
// 3. Generate the password based on the criteria
    
var characters = lowercaseChar;
var password = "";
if (uppercaseCheck && numberCheck && specialCheck){
 characters += uppercaseChar + numberChar + specialChar;

}else if (uppercaseCheck && numberCheck){
 characters += uppercaseChar + numberChar;

}else if (numberCheck && specialCheck){
 characters += numberChar + specialChar;

}else if (uppercaseCheck && specialCheck){
 characters += uppercaseChar + specialChar;

}else if (uppercaseCheck){
 characters += uppercaseChar;

}else if(numberCheck){
 characters += numberChar;

}else if (specialCheck){
 characters += specialChar;

}else{
 characters === lowercaseChar;
}

 for(var i = 0; i < passwordLength; i++){
   password += characters.charAt(Math.floor(Math.random() * characters.length));
 }
 return password;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);