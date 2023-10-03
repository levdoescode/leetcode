var addTwoNumbers = function (l1, l2) {
    let int1 = 0;
    for (let i = l1.length - 1; i >= 0; i--) {
        int1 += l1[i] * 10 ** i;
    }

    let int2 = 0;
    for (let i = l2.length - 1; i >= 0; i--) {
        int2 += l2[i] * 10 ** i;
    }

    let total = int1 + int2;
    let reverse = [];
    while (total > 0) {
        reverse.push(total % 10);
        total = Math.floor(total / 10);
    }

    return reverse;
};

a = [2, 4, 3];
b = [5, 6, 4];

console.log(addTwoNumbers(a, b));
//d = '3';