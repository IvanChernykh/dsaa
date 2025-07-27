import linearSearch from "../search/linearSearch";

describe("Linear Search", () => {
  const arr = [2, 5, 3, 1, 5, 7, 8, 69, 4, 9, 0, 42];

  it("should return true", () => {
    expect(linearSearch(arr, 69)).toBe(true);
  });

  it("should return true", () => {
    expect(linearSearch(arr, 0)).toBe(true);
  });

  it("should return false", () => {
    expect(linearSearch(arr, 2077)).toBe(false);
  });
});
