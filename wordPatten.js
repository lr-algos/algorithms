/**
 * Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
 */

function patternMatch(pattern, s) {
    const words = s.split(' ');
    if (words.length !== pattern.length) return false;
    const myMap = {};
  
    for (let i = 0; i < pattern.length; i++) {
      if (pattern[i] in myMap) {
        if (myMap[pattern[i]] !== words[i]) {
          return false;
        }
      } else if (Object.values(myMap).indexOf(words[i]) > -1) {
        return false;
      } else {
        myMap[pattern[i]] = words[i];
      }
    }
    
    return true;
  };

console.log(patternMatch('abba', 'dog dog dog dog'));