// Using recursion
// https://www.youtube.com/watch?v=HAA8mgxlov8
var isMatch = function(s, p) {
    const dfs = function(i, j) {
        if (i >= s.length && j >= p.length) {
            return true;
        }

        if (j >= p.length) {
            return false;
        }

        let match = i < s.length && (s[i] === p[j] || p[j] === '.') ? true : false;
        if (p[j + 1] === '*') {
            if (dfs(i, j + 2) || (match && dfs(i + 1, j))) {
                return true;
            }
        }

        if (match) {
            return dfs(i + 1, j + 1);
        }

        return false;
    }
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
