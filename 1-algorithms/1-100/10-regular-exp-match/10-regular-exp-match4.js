// Using recursion and caching
// https://www.youtube.com/watch?v=HAA8mgxlov8
// In JavaScript we can't have an ordered pair as the key, so we need to turn it to a string
var isMatch = function(s, p) {
    const memo = new Map(); // Use a Map to store cached results

    const dfs = function(i, j) {
        if (memo.has(`${i}-${j}`)) {
            return memo.get(`${i}-${j}`);
        }

        let result;

        if (i >= s.length && j >= p.length) {
            result = true;
        } else if (j >= p.length) {
            result = false;
        } else {
            let match = i < s.length && (s[i] === p[j] || p[j] === '.');
            if (p[j + 1] === '*') {
                if (dfs(i, j + 2) || (match && dfs(i + 1, j))) {
                    result = true;
                } else {
                    result = false;
                }
            } else if (match) {
                result = dfs(i + 1, j + 1);
            } else {
                result = false;
            }
        }

        // Cache the result before returning
        memo.set(`${i}-${j}`, result);
        return result;
    };

    return dfs(0, 0);
};

console.log(isMatch("aa", "a"));
console.log(isMatch("aa", "a*"));
console.log(isMatch("ab", ".*"));
console.log(isMatch("abdabcabc", "ab.*"));
console.log(isMatch("abababab", "ab*"));
console.log(isMatch("aab", "c*a*b"));
console.log(isMatch("aab", "cc*a*b"));
console.log(isMatch("mississippi", "mis*is*ip*."));
