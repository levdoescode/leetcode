var reverse = function(x) {
    if (x == -2147483648) {
        return 0;
    }
    const mask = x >> 31;
    x = (x + mask) ^ mask;
    
    let sign = 1;
    if (mask) {
        sign = -1;
    }

    let reversed = 0;
    
    while (x) {
        if (reversed > 214748364) {
            return 0;
        }
        reversed = reversed * 10 + x % 10;
        x = ~~(x / 10);
    }
    
    return reversed * sign;
};