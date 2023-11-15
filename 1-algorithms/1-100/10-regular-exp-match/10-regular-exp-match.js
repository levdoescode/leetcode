var isMatch = function(s, p) {
    if (s === p) {
        return true;
    }

    if (!s || !p) {
        return false;
    }
    
    let matched = true;

    let starPos = 0;
    let matchPos = 0;

    while (starPos >= 0) {
        starPos = p.indexOf('*');
        
        if (starPos > 0) {
            // Found a star

        }
    }

    for(let i = 0; i < s.length; i++) {
        if (!p[i]) {
            break;
        }
        if (p[i] === '.') {
            continue;
        }
        if (p[i] === '*') {
            if (p[i - 1] == '.') {
                return matched;
            }
        }
        
        console.log(i, s[i]);
    }
    return matched
};

console.log(isMatch("aa", "a"));
console.log(isMatch("aa", "a*"));
console.log(isMatch("ab", ".*"));
console.log(isMatch("abcabcabc", "ab.*"));
console.log(isMatch("abababab", "ab*"));
