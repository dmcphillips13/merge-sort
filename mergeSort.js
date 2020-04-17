const split = (wholeArray) => {
  if (wholeArray.length <= 1) {
    return wholeArray;
  }
  const midpoint = Math.floor(wholeArray.length / 2);
  const left = wholeArray.slice(0, midpoint);
  const right = wholeArray.slice(midpoint);
  //   return merge(split(left), split(right));
  return [left, right];
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

// const merge = (arr1, arr2) => {};

const mergeSort = (wholeArray) => {
  let returnArray = [];
  let splitArray = split(wholeArray);
  while (returnArray.length < wholeArray.length) {
    merge(splitArray[0], splitArray[1]);
  }
  return returnArray;
};

module.exports = { split, merge };
