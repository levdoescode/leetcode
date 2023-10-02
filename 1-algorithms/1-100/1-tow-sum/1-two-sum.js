let print = function (val) {
    console.log(val);
}

var twoSum = function (nums, target) {
    let indices; // Declare indices as an array
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                indices = [i, j];
                return indices;
            }
        }
    }
};

nums = [2, 7, 11, 15];
target = 9
print(twoSum(nums, target));
