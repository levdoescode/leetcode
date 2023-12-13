var maxArea = function(heights) {
    let maxArea = 0;
    let leftIndex = 0;
    let rightIndex = heights.length - 1;
    let curArea = 0;

    while (leftIndex < rightIndex) {
        heights[leftIndex] < heights[rightIndex] ? curArea = heights[leftIndex] * (rightIndex - leftIndex) : curArea = heights[rightIndex] * (rightIndex - leftIndex);
        (maxArea < curArea) && (maxArea = curArea);
        (leftIndex < rightIndex) && (leftIndex++);
        (rightIndex < leftIndex) && (rightIndex--);
    }

    return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
