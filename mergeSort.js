const split = (wholeArray) => {
  if (wholeArray.length <= 1) {
    return wholeArray;
  }
  const midpoint = Math.floor(wholeArray.length / 2);
  const left = wholeArray.slice(0, midpoint);
  const right = wholeArray.slice(midpoint);
  return merge(split(left), split(right));
};

const merge = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const split = (arr) => arr.map((num) => [num]);

const merge = (arr1, arr2) => {};

const mergeSort = (wholeArray) => {
  let splitArray = split(wholeArray);
};

module.exports = { split, merge };
