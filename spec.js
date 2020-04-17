const { expect } = require("chai");
const sinon = require("sinon");
const { split, merge, mergeSort } = require("./mergeSort");

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
      expect(
        merge([5, 2] , [4,1111