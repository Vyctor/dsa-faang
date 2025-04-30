/**
 * 557. Reverse Words in a String III
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "Mr Ding"
Output: "rM gniD"
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let words = s.split(" ");
  let reverseWords = words.map(reverseWord);
  return reverseWords.join(" ");
};

function reverseWord(word) {
  let left = 0;
  let right = word.length - 1;
  let chars = word.split("");

  while (left < right) {
    [chars[left], chars[right]] = [chars[right], chars[left]];
    left++;
    right--;
  }

  return chars.join("");
}
