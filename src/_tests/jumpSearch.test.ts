import jumpSearch from "../search/jumpSearch";

describe("Jump Search", () => {
  const arr = [3, 4, 5, 6, 7, 23, 26, 42, 69, 90];

  it("Should return false", () => {
    expect(jumpSearch(arr, 1)).toBe(false);
  });

  it("Should return false", () => {
    expect(jumpSearch(arr, 2077)).toBe(false);
  });

  it("Should return true", () => {
    expect(jumpSearch(arr, 91)).toBe(false);
  });

  it("Should return true", () => {
    expect(jumpSearch(arr, 3)).toBe(true);
  });

  it("Should return true", () => {
    expect(jumpSearch(arr, 90)).toBe(true);
  });

  it("Should return true", () => {
    expect(jumpSearch(arr, 23)).toBe(true);
  });

  it("Should return true", () => {
    expect(jumpSearch(arr, 42)).toBe(true);
  });
});
