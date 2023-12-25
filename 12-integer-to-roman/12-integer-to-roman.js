var intToRoman = function (num) {
  const letters = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };
  let roman = "";
  let digitPos = 0;

  while (num > 0) {
    let lsd = num % 10; // least significant digit

    if (lsd === 4 || lsd === 9) {
      roman = letters[10 ** digitPos] + letters[(lsd + 1) * 10 ** digitPos] + roman;
    } else if (lsd >= 5) {
      roman = letters[5 * 10 ** digitPos] + letters[10 ** digitPos].repeat(lsd - 5) + roman;
    } else {
      roman = letters[10 ** digitPos].repeat(lsd) + roman;
    }
    num = Math.floor(num / 10);
    digitPos += 1;
  }
  return roman;
};

console.log("Integer to Roman");
console.log(intToRoman(3));
console.log(intToRoman(4));
console.log(intToRoman(9));
console.log(intToRoman(58));
console.log(intToRoman(1994));
console.log(intToRoman(3999));
console.log(intToRoman(3489));
