var romanToInt = function (s) {
    const romanMap = new Map([
        ["I", 1],
        ["IV", 4],
        ["V", 5],
        ["IX", 9],
        ["X", 10],
        ["XL", 40],
        ["L", 50],
        ["XC", 90],
        ["C", 100],
        ["CD", 400],
        ["D", 500],
        ["CM", 900],
        ["M", 1000],
    ]);

    let result = 0;
    let i = 0;

    while (i < s.length) {
        // Check if the next two characters are a valid roman numeral
        if (i < s.length - 1 && romanMap.has(s.substring(i, i + 2))) {
            result += romanMap.get(s.substring(i, i + 2));
            i += 2;
            // Otherwise, check if the next character is a valid roman numeral
        } else {
            result += romanMap.get(s.substring(i, i + 1));
            i += 1;
        }
    }

    return result;
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("IX")); // 9
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
console.log(romanToInt("MMMCMXCIX")); // 3999
console.log(romanToInt("MMMCDLXXXIX")); // 3489
