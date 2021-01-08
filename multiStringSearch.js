/* 
    Multi Search String

    Input: 
        bigString = 'this is a big string';
        smallStrings = ['this', 'yo', 'is', 'a', 'bigger', 'string', 'kappa'];

    Output:
        [true, false, true, true, fasle, true, false];

**/


function multiStringSearch(bigString, smallStrings) {
   
    let result = []

    for(let i = 0; i < smallStrings.length; i++) {
        const isPresent = bigString.indexOf(smallStrings[i]);

        console.log('isPresent',isPresent);
        (isPresent === -1) ? result.push(false) : result.push(true);
    }
    return result;
  }


  
    const bigString = "hj!)!%Hj1jh8f1985n!)51";
    const smallStrings = ["%Hj7", "8f198", "!)5", "!)!", "!!", "jh81", "j181hf"]

    
    // const bigString = "hj!)!%Hj1jh8f1985n!)51",
    // consgt smallStrings = ["%Hj7", "8f198", "!)5", "!)!", "!!", "jh81", "j181hf"]
      
  

    console.log(multiStringSearch(bigString, smallStrings))