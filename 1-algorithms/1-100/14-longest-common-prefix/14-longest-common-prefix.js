var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];
    let prefix = "";
    let i = 0;
    while (i < strs[0].length) {
        let currentChar = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== currentChar) {
                return prefix;
            }
        }
        prefix += currentChar;
        i++;
    }
    return prefix;
};

let strs = ["flower", "flow", "flight"];
console.log("Longest common prefix: ", longestCommonPrefix(strs), " expected: 'fl'");
strs = ["dog", "racecar", "car"];
console.log("Longest common prefix: ", longestCommonPrefix(strs), " expected: ''");
