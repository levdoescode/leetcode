// R: 15ms, Beats 96.28% M: 53.58MB, Beats 70.68%
// Here we iterate through the string and expand outward from each character

function longestPalindrome(s: string): string {
    let n: number = s.length;
    if (n === 0) return "";

    let longest: string = "";
    let index: number = 0;

    while (index < n) {
        let left: number = index;
        let right: number = index;

        // Expand right while consecutive characters are the same
        while (right + 1 < n && s[right] === s[right + 1]) {
            right++;
        }

        index = right + 1; // Move index to skip duplicate characters

        // Expand outward while characters match
        while (left > 0 && right < n - 1 && s[left - 1] === s[right + 1]) {
            left--;
            right++;
        }

        // Update longest palindrome if found a longer one
        if (right - left + 1 > longest.length) {
            longest = s.slice(left, right + 1);
        }
    }

    return longest;
}

console.log(longestPalindrome("babad")); // "bab"
console.log(longestPalindrome("cbbd")); // "bb"klsdajfksdfj
console.log(longestPalindrome("bananas")); // "anana"
console.log(longestPalindrome("banaanas")); // "anaana"
console.log(longestPalindrome("banaaanass")); // "anaaana"
