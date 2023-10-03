var addTwoNumbers = function(l1, l2) {
    l1.reverse();
    int1 = parseInt(l1.join(''), 10);
    l2.reverse();
    int2 = parseInt(l2.join(''), 10);
    let total = (int1 + int2).toString().split('').reverse();
    return total.map((digit) => parseInt(digit, 10));
};

a = [2, 4, 3];
b = [5, 6, 4];

console.log(addTwoNumbers(a, b));
