// Discrete solution
var intToRoman = function (num) {
  const M = ["", "M", "MM", "MMM"];
  const C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  return (
    M[Math.floor(num / 1000)] +
    C[Math.floor((num % 1000) / 100)] +
    X[Math.floor((num % 100) / 10)] +
    I[num % 10]
  );
};

console.log("Integer to Roman");
console.log(intToRoman(3)); // III
console.log(intToRoman(4)); // IV
console.log(intToRoman(9)); // IX
console.log(intToRoman(58)); // LVIII
console.log(intToRoman(1994)); // MCMXCIV
console.log(intToRoman(3999)); // MMMCMXCIX
console.log(intToRoman(3489)); // MMMCDLXXXIX
