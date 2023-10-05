var lengthOfLongestSubstring = function (s) {
    let max_sub = 0;
    let local_max = 0;
    for (let i = 0; i < s.length; i++) {
        const dict = new Set();
        dict.add(s[i]);
        local_max = 1;
        for (let j = i + 1; j < s.length; j++) {
            if (dict.has(s[j])) {
                break;
            }
            dict.add(s[j]);
            local_max += 1;
        }
        if (local_max > max_sub) {
            max_sub = local_max;
        }
    }
    return max_sub;
};

a1 = "abcabcbb";
a2 = "bbbbb";
a3 = "pwwkew";
a4 = " "

console.log(lengthOfLongestSubstring(a1));
console.log(lengthOfLongestSubstring(a2));
console.log(lengthOfLongestSubstring(a3));
console.log(lengthOfLongestSubstring(a4));
