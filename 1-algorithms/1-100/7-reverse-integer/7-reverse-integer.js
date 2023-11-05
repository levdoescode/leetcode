// Constraints:
// -2^31 <= x <= 2^31 - 1
// -2147483648 <= x <= 2,147,483,647
var reverse = function (x) {
    let sign = BigInt(1);
    if (x < 0) {
        x = x * -1;
        sign = BigInt(-1);
    }
    const digits = String(x).split('').map(Number);
    let reversed = BigInt(digits.reverse().join('')) * sign;
    if (reversed < -2147483648 || reversed > 2147483647) {
        return 0;
    }
    return parseInt(reversed);
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
