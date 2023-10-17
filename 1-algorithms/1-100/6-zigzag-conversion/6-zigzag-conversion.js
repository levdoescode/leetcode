var convert = function(s, numRows) {
    let reverted = "";
    const len = s.length;
    for (let pos = 0, i = 0, j = 0; pos < len; pos += 1) {
        
        console.log(pos, i, j);
        i += numRows;
        j = numRows - 2
    }
    return reverted;
};

console.log(convert("PAYPALISHIRING"), 3);
console.log(convert("PAYPALISHIRING"), 4);
