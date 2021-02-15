var generateBtn = document.querySelector("#generate");
var upperCase = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J","K","L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "+", "<", ">", "?", ";",":"];
var userChoiceArray = [];
var finalPassword = [];



var passwordLength = parseInt(prompt("How long do you want your password to be?"));
if(passwordLength < 7) {
  alert("must be at least 8 characters");
}
if(passwordLength > 128) {
  alert("must be less than 128 characters");
}
else {
    console.log(passwordLength);
};

function getUserChoices() {         
var lowerCaseChoice = confirm("Do you want lowercase characters?"); 
    if(lowerCaseChoice) {
        for(var i=0; i < lowerCase.length; i++)
        userChoiceArray.push(lowerCase[i]);
    }

var upperCaseChoice = confirm("Do you want upperrcase characters?"); 
    if(upperCaseChoice) {
        for(var i=0; i < upperCase.length; i++)
        userChoiceArray.push(upperCase[i]);
}

var numberChoice = confirm("Do you want numbers?"); 
    if(numberChoice) {
        for(var i=0; i < number.length; i++)
        userChoiceArray.push(number[i]);
}

var specialCharactersChoice = confirm("Do you want special characters?"); 
    if(specialCharactersChoice) {
        for(var i=0; i < specialCharacters.length; i++)
        userChoiceArray.push(specialCharacters[i]);
}
return;
};

getUserChoices();

console.log(userChoiceArray);


for(var i=0; i < passwordLength.length; i++) {
userChoiceArray[Math.floor(Math.random() * userChoiceArray.length)];
 
};





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

