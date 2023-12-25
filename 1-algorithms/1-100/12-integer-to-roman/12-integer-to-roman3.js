// Map that includes oddities like 4, 5, 9, 40, 50, 90, 400, 500, 900
function intToRoman(num) {
  const letters = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  return Object.entries(letters).reduce((result, [letter, value]) => {
    result += letter.repeat(Math.floor(num / value));
    num %= value;
    return result;
  }, "");
}

console.log("Integer to Roman");
console.log(intToRoman(3)); // III
console.log(intToRoman(4)); // IV
console.log(intToRoman(9)); // IX
console.log(intToRoman(58)); // LVIII
console.log(intToRoman(1994)); // MCMXCIV
console.log(intToRoman(3999)); // MMMCMXCIX
console.log(intToRoman(3489)); // MMMCDLXXXIX
