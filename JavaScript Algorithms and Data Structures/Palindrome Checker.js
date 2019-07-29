function palindrome(str) {
    let newStr = str.replace(/[\W_]/g, '').toLowerCase();
    let i = 0;
    let j = newStr.length - 1;
    while (i < j) {
        if (newStr[i]!=newStr[j]) return false;
        i++;
        j--;
    }
    return true;
}



console.log(palindrome("not a palindrome"));
console.log(palindrome("A man, a plan, a canal. Panama"));