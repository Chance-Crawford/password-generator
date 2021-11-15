// Assignment Code
var generateBtn = document.querySelector("#generate");

var pass = {
  len: 0,
  lower: true,
  upper: true,
  numbers: true,
  special: true,
  reset: function(){
    this.len = 0;
    this.lower = true;
    this.upper = true;
    this.numbers = true;
    this.special = true;
  }
}

var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// takes every letter from upperLetters and changes it to lower case
var lowerLetters = upperLetters.map((x) => x.toLowerCase());
var numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// splits string into an array
var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");




// the logic for generating the password based on user's criteria
function generatePassword(){

  while(true){
    pass.reset();

    // prompt, alert, and confirm is a method of the window object
    pass.len = prompt("Please enter a length between 8 - 128")

    //after prompt, check the range of passLength and check if it is a number and doesnt
    // return NaN
    if (parseInt(pass.len) < 8 || parseInt(pass.len) > 128 || (!parseInt(pass.len))){
      console.log("Invalid")
    }
    else{
      break;
    }
  }
  
  
  while(true) {
    pass.lower = confirm("Do you want your password to include lower case characters?");
    pass.upper = confirm("How about upper case characters?");
    pass.numbers = confirm("Numbers?");
    pass.special = confirm("Special characters like !#$%&'()* etc.");

    //checks if at least one of the values is truthy
    if(pass.lower || pass.upper || pass.numbers || pass.special){
      alert("Password will display in the box!");
      break;
    }
    else{
      alert("Please select at least one character type.");
    }

  }

  var generatedPass = "";

  var chars = [];

  //pushes all individual items from lowerLetters array to chars
  if(pass.lower){
    chars.push(...lowerLetters);
  }

  if(pass.upper){
    chars.push(...upperLetters);
  }

  if(pass.numbers){
    chars.push(...numberChars);
  }

  if(pass.special){
    chars.push(...specialChars);
  }

  console.log(chars);

  // For every character desired by the user specified in pass.len 
  // get random index from chars array
  for(var i = 0; i < pass.len; i++){
    // gets random index between 0 and chars length
    // no need for +1 at the end because arrays index starts at 0 and 
    // math.random never reaches 1
    var index = Math.floor(Math.random() * chars.length);

    generatedPass += chars[index];
  }

  console.log(generatedPass);
  
  return generatedPass;


}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// On click of button, run function writePassword()
generateBtn.addEventListener("click", writePassword);
