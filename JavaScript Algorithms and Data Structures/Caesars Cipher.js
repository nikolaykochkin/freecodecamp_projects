function rot13(str) { // LBH QVQ VG!
    const alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let index = alfabet.indexOf(str[i]);
        if (index == -1){
            result += str[i];
        } else {
            result += alfabet[((index + 13) % 26)];
        }
    }
    return result;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));