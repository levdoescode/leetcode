var isPalindrome = function (s) {
    //const iterations = Math.ceil(s.length / 2);
    let rightIndex = s.length - 1;
    let leftIndex = 0;
    while (rightIndex >= leftIndex) {
        if (s[leftIndex] != s[rightIndex]) {
            return false
        }
        rightIndex -= 1;
        leftIndex += 1;
    }
    return true;
}

var longestPalindrome = function (s) {
    if (s.length <= 0) {
        return "";
    }
    for (let i = s.length; i > 0; i--) {
        for (let j = 0; j <= s.length - i; j++) {
            if (isPalindrome(s.slice(j, j + i))) {
                return s.slice(j, j + i);
            }
        }
    }
};

//console.log(longestPalindrome("babad"));
//console.log(longestPalindrome("cbbd"));
//console.log(longestPalindrome("abcde"));
//console.log(longestPalindrome("abcdef"));
// console.log(longestPalindrome("a"));
console.log(longestPalindrome("aabb"));
console.log(longestPalindrome("aba"));
console.log(longestPalindrome("aaa"));
console.log(longestPalindrome("aacaa"));
