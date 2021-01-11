/* 
    Multi Search String

    Input: 
        bigString = 'this is a big string';
        smallStrings = ['this', 'yo', 'is', 'a', 'bigger', 'string', 'kappa'];

    Output:
        [true, false, true, true, fasle, true, false];

**/

/* 
    fibonacci: 0,1,1,2,,3,5,8,13,21,34,55
**/

// Recursion

// function fibonacci(n) {
//     let cache = {};
//     if(n < 2) {
//         return n;
//     }

//     else return fibonacci(n-1) + fibonacci(n-2);
// }


// console.log('fibonacci',fibonacci(15));


// Memoization

function fibonacciMemo (n) {
    let cache = {};

    return function fib(n) {
        if(n in cache) {
            return n
        } else {
            if(n < 2) {
                return n;
            } else {
                cache[n] = fib(n-1) + fib(n-2);
                return cache[n];
            }
        }

    }
}

const fibMemo = fibonacciMemo();

console.log(fibMemo(15));

