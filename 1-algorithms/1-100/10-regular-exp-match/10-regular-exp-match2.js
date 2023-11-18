// Using a matrix
var isMatch = function(s, p) {
    const width = p.length + 1;
    const height = s.length + 1;
    const matrix = Array.from({length: height}).map(() => Array.from({length: width}).fill(false));
    matrix[0][0] = true;

    let seed = [true];
    let match = true;
    for (let i = 0; i < p.length; i++) {
        if (!match) {
            seed.push(false);
            continue;
        }

        if (p[i] === '*') {
            seed.push(true);
        } else {
            if (i > 0 && seed[i] === false) {
                match = false;
            }
            seed.push(false);
        }
    }

    console.log(seed);
    matrix[0] = seed;
    //console.log(matrix);

    for (let i = 1; i < height; i++) {
        for (let j = 1; j < width; j++) {
            if (s[i - 1] == p[j - 1] || p[j - 1] == '.') {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else if (p[j - 1] === '*'
                && (matrix[Math.max(0, i - 2)][j]
                    || (s[i - 1] === p [j - 2] && matrix[i][j - 1])
                    || (Math.max(0, p[j - 2]) === '.'))) {
                    matrix[i][j] = true;
                }
        }
    }
    //console.log(matrix);

    return matrix[height - 1][width - 1];
};

console.log(isMatch("aa", "a"));
console.log(isMatch("aa", "a*"));
console.log(isMatch("ab", ".*"));
console.log(isMatch("abdabcabc", "ab.*"));
console.log(isMatch("abababab", "ab*"));
console.log(isMatch("aab", "c*a*b"));
console.log(isMatch("aab", "cc*a*b"));
console.log(isMatch("mississippi", "mis*is*ip*."));
