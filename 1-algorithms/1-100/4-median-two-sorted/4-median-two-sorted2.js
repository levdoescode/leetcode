// R: 2ms, Beats 98.42% M: 54.19MB, Beats 88.98%
// Here we iterate throught both arrays comparing the values
// We don't need to store the sorted array
// We only need to know the last (two) value(s).
var findMedianSortedArrays = function (nums1, nums2) {
    const totalLen = nums1.length + nums2.length;
    const isEven = totalLen % 2 === 0;
    const maxIndex = Math.floor(totalLen / 2);

    let index1 = 0,
        index2 = 0;
    let curr = null,
        prev = null;

    for (let i = 0; i <= maxIndex; i++) {
        prev = curr;

        if (index1 < nums1.length && (nums1[index1] < nums2[index2] || index2 >= nums2.length)) {
            curr = nums1[index1];
            index1++;
        } else {
            curr = nums2[index2];
            index2++;
        }
    }

    return isEven ? (curr + prev) / 2 : curr;
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
