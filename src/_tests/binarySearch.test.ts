import binarySearch from "../search/binarySearch";

describe("Binary Search", () => {
  const arr = [1, 3, 5, 6, 7, 23, 26, 42, 69, 90];

  it("should return true (first elem)", () => {
    expect(binarySearch(arr, 1)).toBe(true);
  });

  it("should return true (last elem)", () => {
    expect(binarySearch(arr, 90)).toBe(true);
  });

  it("should return true (middle elem)", () => {
    expect(binarySearch(arr, 23)).toBe(true);
  });

  it("should return true (random elem)", () => {
    expect(binarySearch(arr, 69)).toBe(true);
  });

  it("should return false", () => {
    expect(binarySearch(arr, 43)).toBe(false);
  });
});
