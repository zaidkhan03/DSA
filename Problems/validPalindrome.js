// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Input: s = "race a car"
// Output: false

// Input: s = " "
// Output: true

const s = "A man, a plan, a canal: Panama";
// const s = " ";
// const s = "0P";
// const s = ".a";

var isPalindrome = function (s) {
  let left = 0,
    right = s.length - 1;
  s = s.toLowerCase();
  while (left < right) {
    while (left < right && !isAlNum(s[left])) {
      left++;
    }
    while (left < right && !isAlNum(s[right])) {
      right--;
    }
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

function isAlNum(a) {
  return (a >= "a" && a <= "z") || (a >= "0" && a <= "9");
}
console.log(isPalindrome(s));
