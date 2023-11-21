// Brut-force naive solution
// Works but not for huge input arrays

var maxArea = function(height) {
    let max = 0;

    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const min = Math.min(height[i], height[j]);
            const dif = j - i;
            const newArea = min * dif;
            if (newArea > max) {
                max = newArea;
            }
        }
    }

    return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
