let word1 = "Katak";
let word2 = "Kasur Ini Rusak";
let word3 = "Level";
let word4 = "Malam";
let word5 = "A man, a plan, a canal, Panama!";
let word6 = "Coding";

function checkPalindrome(input) {
  let strArray = input.toLowerCase().split("");
  let newArr = strArray.join("");
  let reverseArr = [...newArr].reverse().join("");

  if (newArr === reverseArr) {
    return true;
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrome(word1));
console.log(checkPalindrome(word2));
console.log(checkPalindrome(word3));
console.log(checkPalindrome(word4));
console.log(checkPalindrome(word5));
console.log(checkPalindrome(word6));
