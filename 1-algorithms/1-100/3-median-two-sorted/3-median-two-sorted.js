var findMedianSortedArrays = function(nums1, nums2) {
    const combined = nums1.concat(nums2);
    combined.sort((a, b) => a - b);
    const midIndex = combined.length;
    if (midIndex % 2) {
        return combined[Math.floor(midIndex / 2)];
    }
    const halfIndex = Math.floor(midIndex / 2);
    return (combined[halfIndex] + combined[halfIndex - 1]) / 2;
};

let m = [1, 3];
let n = [2];
console.log(findMedianSortedArrays(m, n));
m = [1, 2];
n = [3, 4];
console.log(findMedianSortedArrays(m, n));
m = [3];
n = [-2, -1];
console.log(findMedianSortedArrays(m, n));
