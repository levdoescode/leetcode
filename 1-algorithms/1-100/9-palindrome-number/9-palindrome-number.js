var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    let workingNumber = x;
    let reversedNum = 0;
  
    while (workingNumber > 0) {
      reversedNum = reversedNum * 10 + workingNumber % 10;
      workingNumber = Math.floor(workingNumber / 10);
    }

    if (reversedNum != x) {
        return false
    }

    return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
