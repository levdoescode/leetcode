// Constraints:
// -2^31 <= x <= 2^31 - 1
// -2,147,483,648 <= x <= 2,147,483,647
// 1,534,236,469
var reverse = function (x) {
    let sign = 1;
    if (x < 0) {
        sign = -1;
    }

    let digits = [];
    x = Math.abs(x);
    while (x > 0) {
        digits.push(x % 10);
        x =  Math.floor(x / 10);
    }
    let reversed = 0;
    for (let i = 0, power = digits.length - 1; i < digits.length; i++, power--) {
        reversed += digits[i] * 10 ** power;
    }
    reversed = reversed * sign;
    if (reversed < -2147483648 || reversed > 2147483647) {
        return 0;
    }
    return reversed;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));
