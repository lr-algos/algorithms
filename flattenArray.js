/**
 * Flatten an array such that:
 * Input: [1,[2,[3],4],[5]]
 * Output: [1,2,3,4,5]
 */

 // Using stack

 function flattenWithStack(input) {
     const stack = [...input];
     const res = [];

     while(stack.length) {
         const item = stack.pop();
         if(Array.isArray(item)){
             stack.push(...item);
         } else {
             res.push(item)
         }
         
     }
     return res.reverse();
 }

 const input= [1,[2,[3],4],[5]];
 // console.log(flattenWithStack(input));

 function flattenArrayRecursive(input) {
    let result = [];
    for(let i=0; i< input.length; i++){
        if(Array.isArray(input[i])){
            result = result.concat(flattenArrayRecursive(input[i]));
        } else {
            result.push(input[i]);
        }
    }
    return result;
 }

 console.log(flattenArrayRecursive(input));



