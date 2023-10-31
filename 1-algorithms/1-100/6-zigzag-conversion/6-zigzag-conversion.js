var convert = function (s, numRows) {
    let reverted = "";
    const numLetters = s.length;
    if (numRows == 1) {
        return s;
    }

    let v = (numRows * 2) - 2;
    for (let row = 0; row < numRows; row++) {
        let pos = row;
        while (pos < numLetters) {
            reverted += s[pos];
            pos += v;
            if (row > 0 && row < numRows - 1 && pos < numLetters) {
                reverted += s[pos];
            }
            pos += row * 2;
        }
        v -= 2;
    }
    return reverted;
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
