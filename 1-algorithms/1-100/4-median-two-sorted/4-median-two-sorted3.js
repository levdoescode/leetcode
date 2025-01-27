var findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length > nums2.length) {
        // Ensure nums1 is the smaller array
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length,
        n = nums2.length;
    let left = 0,
        right = m;

    while (left <= right) {
        const partition1 = Math.floor((left + right) / 2);
        const partition2 = Math.floor((m + n + 1) / 2) - partition1;

        const maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
        const minRight1 = partition1 === m ? Infinity : nums1[partition1];

        const maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
        const minRight2 = partition2 === n ? Infinity : nums2[partition2];

        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            // Found correct partitions
            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            } else {
                return Math.max(maxLeft1, maxLeft2);
            }
        } else if (maxLeft1 > minRight2) {
            // Move partition1 left
            right = partition1 - 1;
        } else {
            // Move partition1 right
            left = partition1 + 1;
        }
    }

    throw new Error("Input arrays are not sorted or invalid.");
};

// Test cases
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5
console.log(findMedianSortedArrays([], [1])); // Output: 1
console.log(findMedianSortedArrays([2], [])); // Output: 2
console.log(findMedianSortedArrays([0, 0], [0, 0])); // Output: 0

// Time complexisty O(log(minm, n))
