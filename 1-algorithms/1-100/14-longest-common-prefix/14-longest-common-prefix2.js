// Doesn't work when start and ending charactes are the same when comparing
// ["car", "cir"]

var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];

    let prefixIndex = strs[0].length - 1;
    for (let i = 1; i < strs.length; i++) {
        prefixIndex = Math.min(prefixIndex, strs[i].length - 1);

        while (prefixIndex >= 0 && strs[i][prefixIndex] !== strs[i - 1][prefixIndex]) {
            prefixIndex--;
        }

        if (prefixIndex === -1) {
            return "";
        }
    }

    return strs[0].substring(0, prefixIndex + 1);
};

let strs = ["flower", "flow", "flight"];
console.log("Longest common prefix: ", longestCommonPrefix(strs), " expected: 'fl'");
strs = ["dog", "racecar", "car"];
console.log("Longest common prefix: ", longestCommonPrefix(strs), " expected: ''");
