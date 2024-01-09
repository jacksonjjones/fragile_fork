// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {
  
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = " !@#$%^&8()_+-=";
  
  var allowedChars = "";
  var password = "";
  
    const length = prompt("please enter a password length between 8 and 128 characters!");
    const includeLowercase = confirm("would you like to use lowercase");
    const includeUppercase = confirm("would you like to use uppercase");
    const includeNumbers = confirm("would you like to use numbers");
    const includeSymbols = confirm("would you like to use symbols");

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if(!length || length < 8 || length > 128){
      return alert("password must be between 8 and 128 characters!");
    
  }
  if(allowedChars.length === 0){
      return alert("At least 1 set of character needs to be selected");
  }

  for(let i = 0; i < length; i++){
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];
  }

  return password;
}

function writePassword(){
    console.log("hi");
    var newPassword = generatePassword()
    document.querySelector("#password").value = newPassword;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);