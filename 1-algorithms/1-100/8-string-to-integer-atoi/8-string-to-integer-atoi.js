
var myAtoi = function(s) {
    if (s.length <= 0) {
        return 0;
    }
    s = s.trim();
    let sign = 1;
    let pos = 0;
    if ( s[0] === '-') {
        sign = -1;
        pos = 1;
    } else if ( s[0] === '+') {
        pos = 1;
    }
    if (pos === s.length) {
        return 0;
    }
    
    let code = s.charCodeAt(pos);
    const digits = ['0'];
    while (code >= 48 && code <= 57) {
        digits.push(s[pos]);
        pos++;
        code = s.charCodeAt(pos);
    }
    let result = parseInt(digits.join('')) * sign;
    if (sign === 1) {
        result = Math.min(2147483647, result);
    } else {
        result = Math.max(-2147483648, result);
    }
    return result;
};


console.log(myAtoi('42'));
console.log(myAtoi('-42'));
