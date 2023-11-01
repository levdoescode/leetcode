// Solution from https://www.youtube.com/watch?v=EWZWiG750FI
var convert = function (s, numRows) {
    if (s == null || numRows <= 0) {
        return '';
    }

    if (numRows == 1) {
        return s;
    }

    let reverted = "";
    const step = (numRows * 2) - 2;

    for (let row = 0; row < numRows; row++) {
        for (let pos = row; pos < s.length; pos += step) {
            reverted += s[pos];
            const nextJump = pos + step - row * 2
            if (row != 0 && row != numRows - 1 && nextJump < s.length) {
                reverted += s[nextJump];
            }
        }
    }

    return reverted;
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
