// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword) {
  if (userPassword.length < 6) {
    return "Weak";
  } else if (userPassword >= 6 && userPassword <= 10) {
    return "Medium";
  } else (userPassword > 10)
  return "Strong";  
}

console.log(checkPasswordStrength("ssswnalWadqQ"));
console.log(checkPasswordStrength("TechUp"));
console.log(checkPasswordStrength("abcde"));
