// Constraints:
// -2^31 <= x <= 2^31 - 1
// -2,147,483,648 <= x <= 2,147,483,647
// 1,534,236,469
var reverse = function (x) {
    let sign = 1;
    if (x < 0) {
        sign = -1;
    }
    
    x = Math.abs(x);
    let reversed = 0;
    
    const top =  214748364;
    while (x) {
        if (reversed > top) {
            return 0;
        }
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    
    return reversed * sign;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));
