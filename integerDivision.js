/** 
 * Divide two integers without using multiplication, division and mod operator
 * Input : a = 10, b = 3
Output : 3

Input : a = 43, b = -8
Output :  -5 
*/

function integerDivison(a, b) {
    let sign = 1;
    if(a < 0) {
        a = -a;
        sign = -1;
    }
    if(b < 0) {
        b= -b;
        sign = -1;
    }
    let counter = 0;
    while(a > b) {
        a = a-b;
        counter ++
    }
    
    return {
        ans: counter * sign,
        reminder: a
    }
}


console.log(integerDivison(43, -8))