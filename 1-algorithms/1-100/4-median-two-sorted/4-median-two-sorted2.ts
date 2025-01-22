// R: 5ms, Beats 72.71% M: 55.45MB, Beats 89.83%
// Here we iterate throught both arrays comparing the values
// We don't need to store the sorted array
// We only need to know the last (two) value(s).
var findMedianSortedArrays = function (nums1: number[], nums2: number[]) {
    const totalLen = nums1.length + nums2.length;
    const isEven = totalLen % 2 === 0;
    const maxIndex = Math.floor(totalLen / 2);

    let index1 = 0,
        index2 = 0;
    let curr: number | undefined, prev: number | undefined;

    for (let i = 0; i <= maxIndex; i++) {
        prev = curr;

        if (index1 < nums1.length && (nums1[index1] < nums2[index2] || index2 >= nums2.length)) {
            curr = nums1[index1++];
        } else {
            curr = nums2[index2++];
        }
    }

    // Handle undefined values gracefully
    if (curr === undefined) return 0;

    return isEven ? (curr + (prev ?? 0)) / 2 : curr;
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
