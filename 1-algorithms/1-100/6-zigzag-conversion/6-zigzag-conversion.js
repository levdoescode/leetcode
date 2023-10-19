var convert = function(s, numRows) {
    let reverted = "";
    //const len = s.length;
    const bridge = numRows - 2;
    let i = 0;
    let row = 0;
    let step = 0;
    let pos = 0;
    while (i < s.length) {
        reverted += s[pos];
        pos += (numRows - row) + (bridge - step);
        if (pos > s.length) {
            if (row > 0 && row < numRows - 1) {
                step += 1;
            }
            row += 1;
            pos = row;
        }
        i += 1;
    }
    return reverted;
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
