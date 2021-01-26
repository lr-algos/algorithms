
ceaserCipherEncryptor = (string, key) => {
    key = key % 26;
    const encrypted = []
    for(let i=0; i< string.length; i++) {
        console.log(string.charCodeAt(i))
        const newCharCode = string.charCodeAt(i) + key;
        if(newCharCode <= 122) {
            encrypted.push(String.fromCharCode(newCharCode))
        } else {
            encrypted.push(String.fromCharCode(96 + newCharCode % 122))
        }
    }
    return encrypted.join('');
}


ceaserCipherEncryptor('xyz',2)