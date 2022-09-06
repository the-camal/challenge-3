// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword(){
var pwdopts =[];
var finalPass = [];
var pwdLength = prompt("choose a password length 8-128 characters");

if (pwdLength >= 8 ) {
} else {
  alert("has to be a number between 8 and 128. ")

};
// what will be genrated//

var lctype = confirm("do you want lowercase? ");
if (lctype){
  pwdopts.push('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','r','x','y','z')
}
var uctype = confirm("do you want uppercase letters?");
if (uctype){
pwdopts.push('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','R','X','Y','Z')
} 
var numtype = confirm("do you want numbers?")
if (numtype){
  pwdopts.push('0','1','2','3','4','5','6','7','8','9')
}
var sctype = confirm("do you wnat specals?")
if (sctype){
pwdopts.push('!','@','#','$','%','&','~')
}
console.log(pwdopts)

for (let index = 0; index < pwdLength; index++) {
  var randomCharacter = pwdopts[Math.floor(Math.random() * pwdopts.length)]
  finalPass.push(randomCharacter);

  
}
console.log(finalPass);
var finalPassStr = finalPass.join();
console.log(finalPassStr)
document.getElementById('password').value = finalPassStr.replace(/,/g,'');
}


//function textboxPassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  

  //document.getElementById('password').value = password;

//var passowrd = generatePassword() {//


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

