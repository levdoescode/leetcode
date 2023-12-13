// Beats 96.40% 
var maxArea = function(heights) {
    let maxArea = 0;
    let leftIndex = 0;
    let rightIndex = heights.length - 1;
    let curArea = 0;

    while (leftIndex < rightIndex) {
        heights[leftIndex] < heights[rightIndex] ? curArea = heights[leftIndex] * (rightIndex - leftIndex) : curArea = heights[rightIndex] * (rightIndex - leftIndex);
        (maxArea < curArea) && (maxArea = curArea);
        heights[leftIndex] < heights[rightIndex] ? leftIndex++ : rightIndex--;
    }

    return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([2,3,4,5,18,17,6]));
