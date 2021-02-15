// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J","K","L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "+", "<", ">", "?", ";",":"];
var userChoiceArray = [];
var finalPassword = [];

function getUserChoices() { 
  
  var passwordLength = parseInt(prompt("How long do you want your password to be?"));
  if(passwordLength < 8) {
    alert("must be at least 8 characters");
  }
  if(passwordLength > 128) {
    alert("must be less than 128 characters");

  var lowerCaseChoice = confirm("Do you want lowercase characters?"); 

  var upperCaseChoice = confirm("Do you want upperrcase characters?"); 

  var numberChoice = confirm("Do you want numbers?"); 

  var specialCharactersChoice = confirm("Do you want special characters?"); 
  };

getUserChoices(); 

var userChoices = {
  length: passwordLength,
  hasLowerCase: lowerCaseChoice,
  hasUpper: upperCaseChoice,
  hasNumber: numberChoice,
  hasSpecialCharacter: specialCharactersChoice
};

function getRandom(array) {
  var randomIndex = Math.floor(Math.random()* array.length);
  return array[randomIndex];
}


function generatePassword() {
  var passwordOptions = getUserChoices();
  // var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

}
  if(passwordOptions.lowerCaseChoice) {
   possibleCharacters = possibleCharacters.concat(lowerCase);
   guaranteedCharacters.concat(getRandom(lowerCase));

  };

// repeat for following 3 
  if(passwordOptions.upperCaseChoice) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    guaranteedCharacters.concat(getRandom(upperCase));
      
  };

  if(passwordOptions.numberChoice) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.concat(getRandom(numbers));
    
  };

  if(passwordOptions.specialCharactersChoice) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.concat(getRandom(specialCharacters));

  };

for( var i=0; i < passwordOptions.length; i++) {
  result.push(getRandom(possibleCharacters));

}

for( var i=0; i < guaranteedCharacters.length; i++) {
  result[i] = guaranteedCharacters[i];
}

console.log(result);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}}

// // // Add event listener to generate button
// // generateBtn.addEventListener("click", writePassword)
