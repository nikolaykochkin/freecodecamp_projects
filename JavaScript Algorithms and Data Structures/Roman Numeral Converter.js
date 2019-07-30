const ARAB = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
const ROMAN = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];

function convertToRoman(number) {
    if(!number) return '';
    let ret = '';
    let i = ARAB.length - 1;
    while(number > 0){
        if(number >= ARAB[i]){
            ret += ROMAN[i];
            number -= ARAB[i];
        } else {
            i--;
        }
    }
    return ret;
}

convertToRoman(36);
