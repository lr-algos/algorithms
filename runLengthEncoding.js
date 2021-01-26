/* 
input = AAAAAAAAAAAAABBCCCCDD
output should be= 9A4A2B4C2D
**/

runLengthEncoding = (string) => {
    let count = 0;
    let newString=''
    for(let i=1; i <= string.length; i++){
        if(string[i] !== string[i-1] || count >= 8) {
            newString += 1 + count + string[i-1];
            count = 0;
        } else {
            count ++;
        }
    }
    return  newString;
}

runLengthEncoding('AAAAAAAAAAAAABBCCCCDD');