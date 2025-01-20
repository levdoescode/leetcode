var lengthOfLongestSubstring = function (s) {
    let charMap = new Map();
    let longest = 0;
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        const curr = charMap.get(s[i]);
        if (curr !== undefined && curr >= start) {
            start = curr + 1;
        }
        charMap.set(s[i], i);
        longest = Math.max(longest, i - start + 1);
    }

    return longest;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
