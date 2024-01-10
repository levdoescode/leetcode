// From https://leetcode.com/problems/roman-to-integer/solutions/801395/javascript-clean-solution/

var romanToInt = function (s) {
    const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let num = 0;

    for (let i = 0; i < s.length; i++) {
        const curr = map[s[i]],
            next = map[s[i + 1]];
        if (curr < next) num -= curr;
        else num += curr;
    }
    return num;
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("IX")); // 9
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
console.log(romanToInt("MMMCMXCIX")); // 3999
console.log(romanToInt("MMMCDLXXXIX")); // 3489
