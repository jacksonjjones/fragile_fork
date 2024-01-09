// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
  
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = " !@#$%^&8()_+-=";
  
  var allowedChars = "";
  var password = "";
  
  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if(length <= 0){
      return '(password length must be at least 1)';
    
  }
  if(allowedChars.length === 0){
      return '(At least 1 set of character needs to be selected)';
  }
  if(length === 129){
      return '(password length cannot be greater than 128)';
  }

  for(let i = 0; i < length; i++){
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];
  }

  return password;
}

const passwordLength = 8;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true; 

var password = writePassword(passwordLength,
                            includeLowercase,
                            includeUppercase,
                            includeNumbers,
                            includeSymbols);

var passwordText = document.querySelector("#password");

passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

