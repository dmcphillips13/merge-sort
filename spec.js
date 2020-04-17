const { expect } = require("chai");
const sinon = require("sinon");
const { split, merge, mergeSort } = require("./mergeSort");
const sort = require('./sort')


describe('merge sort', () => {
  describe('an empty array', () => {
    it('is sorted', () => {
      expect(sort([])).to.eql([])
    })
  })
  describe('an array of one element', () => {
    it('is sorted', () => {
      expect(sort([1])).to.eql([1])
    })
  })
  describe('an array of two elements', () => {
    it('is sorted', () => {
      expect(sort([1, 0])).to.eql([0, 1])
    })
  })
  describe('an array of three elements', () => {
    it('is sorted', () => {
      expect(sort([1, 0, -1])).to.eql([-1, 0, 1])
    })
  })
  describe('an array of four elements', () => {
    it('is sorted', () => {
      expect(sort([1, 0, -1, 1000])).to.eql([-1, 0, 1, 1000])
    })
  })
})

describe("All Functions", function () {
  describe("Split Array function", function () {
    it("is able to split an array into two halves", function () {
      expect(split([3, 1, 4, 2])).to.eql([
        [3, 1],
        [4, 2],
      ]);
    });
  });
  describe("Merge function", function () {
    it("is able to merge two sorted arrays into one sorted array", function () {
      expect(merge([1, 4], [2, 5]).to.equall([1, 2, 4, 5]));
    });
  });
});

//   describe("Merge function", function () {
//     it("is able to merge two sorted arrays into one sorted array", function () {
//       expect(
//         merge([5, 2] , [4,1111111111111111
  });
});

  });
});

//   describe("Merge function", function () {
//     it("is able to merge two sorted arrays into one sorted array", function () {
//       expect(
//         merge([5, 2] , [4,1111111111111111
  });
});

//   describe("Merge function", function () {
//     it("is able to merge two sorted arrays into one sorted array", function () {
//       expect(
//         merge([5, 2] , [4,1111111111111111
