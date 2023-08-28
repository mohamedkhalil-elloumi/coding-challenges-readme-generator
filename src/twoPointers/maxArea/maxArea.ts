export const maxArea = (heights: Array<number>) => {
  let i = 0;
  let j = heights.length - 1;
  let max = 0;

  while (i < j) {
    let height = Math.min(heights[i], heights[j]);
    let width = Math.abs(i - j);
    const area = height * width;
    max = Math.max(area, max);
    if (heights[i] <= heights[j]) {
      i++;
    } else if (heights[i] > heights[j]) {
      j--;
    }
  }

  return max;
};
