// https://paulrohan.medium.com/parenthesis-matching-problem-in-javascript-the-hacking-school-hyd-7d7708278911
// Time complexity 0(n)
function validParentheses(s) {
    const map = {
        '(': ')',
        '[': ']',
        '{': '}',
    }

    const myStack = [];
    for(let i=0; i< s.length; i++) {
        if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
            myStack.push(s[i]);
        } else {
            lastItem = myStack.pop();
            if(s[i] !== map[lastItem]) {
                return false;
            } 
        }
    }
    if(myStack.length > 0) {
        return false
    }
    return true
}





const s = "()[]{})";

console.log(validParentheses(s));